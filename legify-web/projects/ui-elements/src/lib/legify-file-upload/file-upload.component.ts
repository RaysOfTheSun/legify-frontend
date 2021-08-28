import {
  AfterContentChecked,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  Type,
  ViewChild
} from '@angular/core';
import {
  FileUploadCreateFileEvent,
  FileUploadDeleteFileEvent,
  FileUploadPreviewFileEvent,
  FileUploadReplaceFileEvent
} from './constants';
import { Subscription } from 'rxjs';
import { filter, take, withLatestFrom } from 'rxjs/operators';
import { FileUploadInputDirective, FileUploadInvalidItemDirective, FileUploadItemDirective } from './directives';
import { FileUploadEventService, FileUploadService } from './services';
import { FileUploadEvent } from './constants';
import { FileUploadFileAdded, FileUploadItemModified } from './models';

@Component({
  selector: 'legify-web-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, OnDestroy, AfterContentChecked {
  @Output()
  itemClicked: EventEmitter<any> = new EventEmitter();

  @Output()
  fileAdded: EventEmitter<FileUploadFileAdded> = new EventEmitter();

  @Output()
  itemRemoved: EventEmitter<FileUploadItemModified> = new EventEmitter();

  @Output()
  itemReplaced: EventEmitter<FileUploadItemModified> = new EventEmitter();

  @Output()
  invalidFileAdded: EventEmitter<FileUploadFileAdded> = new EventEmitter();

  @Output()
  itemLimitReached: EventEmitter<boolean> = new EventEmitter();

  @Output()
  minimumUploadsNotReached: EventEmitter<boolean> = new EventEmitter();

  @Input()
  files: any[];

  @Input()
  invalidFiles: any[];

  @Input()
  minimumUploads = 0;

  @Input()
  maximumUploads = 50;

  @Input()
  alwaysShowInput = true;

  @Input()
  acceptedFileTypes: string[] = [];

  @ContentChild(FileUploadInputDirective, { read: TemplateRef, static: true })
  public inputTemplate: TemplateRef<any>;

  @ContentChild(FileUploadItemDirective, { read: TemplateRef, static: true })
  public itemTemplate: TemplateRef<any>;

  @ContentChild(FileUploadInvalidItemDirective, { read: TemplateRef, static: true })
  public invalidItemTemplate: TemplateRef<any>;

  @ViewChild('newFileInput', { static: true })
  protected fileUploadInput: ElementRef<HTMLInputElement>;

  @ViewChild('replacementFileInput', { static: true })
  protected replacementFileInput: ElementRef<HTMLInputElement>;

  protected touched = false;

  protected componentSubscriptions: Subscription = new Subscription();

  constructor(
    protected fileUploadService: FileUploadService,
    protected fileUploadEventService: FileUploadEventService
  ) {
    this.listenForCreateEvents();
    this.listenForDeleteEvents();
    this.listenForPreviewEvents();
    this.listenForReuploadEvents();
  }

  ngOnInit(): void {
    this.fileUploadService.setTotalFileCount(this.files.length);
  }

  ngOnDestroy(): void {
    this.componentSubscriptions.unsubscribe();
  }

  ngAfterContentChecked(): void {
    if (this.touched) {
      this.minimumUploadsNotReached.emit(this.files.length < this.minimumUploads);
    }
  }

  protected listenForPreviewEvents(): void {
    this.listenToEventWithType(FileUploadPreviewFileEvent, ({ file }) => this.itemClicked.emit(file));
  }

  protected listenForCreateEvents(): void {
    this.listenToEventWithType(FileUploadCreateFileEvent, (_) => this.fileUploadInput.nativeElement.click());
  }

  protected listenForReuploadEvents(): void {
    this.listenToEventWithType(FileUploadReplaceFileEvent, ({ file }) => {
      this.touched = true;
      this.fileUploadService.setFileToBeReplaced(file);
      this.replacementFileInput.nativeElement.click();
    });
  }

  protected listenForDeleteEvents(): void {
    this.listenToEventWithType(FileUploadDeleteFileEvent, ({ file }) => {
      this.touched = true;
      const modifiedItemIndex = this.files.findIndex((fileUploadFile) => fileUploadFile === file);
      this.itemRemoved.emit({ modifiedItem: file, modifiedItemIndex });
    });
  }

  protected listenToEventWithType<E extends FileUploadEvent>(
    eventType: Type<E>,
    onEventEmitted?: (e: E) => void
  ): void {
    const fileUploadEventSubscription = this.fileUploadEventService.events$
      .pipe(filter((fileUploadEvent) => fileUploadEvent instanceof eventType))
      .subscribe(onEventEmitted);
    this.componentSubscriptions.add(fileUploadEventSubscription);
  }

  public isFileInputShown(): boolean {
    return this.alwaysShowInput || !this.fileUploadService.isFileUploadLimitReached(this.files, this.maximumUploads);
  }

  public handleReplacementFileInputChange(event: Event): void {
    const eventFiles: FileList = (event.target as any).files;
    const rawFiles$ = this.fileUploadService
      .convertHtmlFilesToRawFiles(eventFiles, this.acceptedFileTypes, this.maximumUploads)
      .pipe(withLatestFrom(this.fileUploadService.fileToBeReplaced), take(eventFiles.length + 1));

    rawFiles$.subscribe(([rawFile, itemToBeReplaced]) => {
      const modifiedItemIndex = this.files.findIndex((file) => file === itemToBeReplaced);
      this.itemReplaced.emit({ modifiedItem: itemToBeReplaced, modifiedItemIndex, modifiedItemReplacement: rawFile });
    });

    this.touched = true;
  }

  public handleFileInputChange(event: Event): void {
    const eventFiles: FileList = (event.target as any).files;

    const rawFiles$ = this.fileUploadService
      .convertHtmlFilesToRawFiles(eventFiles, this.acceptedFileTypes, this.maximumUploads)
      .pipe(take(eventFiles.length + 1));

    const validRawFiles$ = rawFiles$.pipe(filter((rawFile) => !rawFile.invalid));
    const invalidRawFiles$ = rawFiles$.pipe(filter((rawFile) => rawFile.invalid));

    validRawFiles$.subscribe((validRawFile) => this.fileAdded.emit({ rawFile: validRawFile }));
    invalidRawFiles$.subscribe((invalidRawFile) => this.invalidFileAdded.emit({ rawFile: invalidRawFile }));

    this.touched = true;
  }
}
