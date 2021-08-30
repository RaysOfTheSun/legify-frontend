import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
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
  styleUrls: ['./file-upload.component.scss'],
  providers: [FileUploadEventService]
})
export class FileUploadComponent implements OnInit, OnDestroy, OnChanges {
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
  uploadLimitReached: EventEmitter<boolean> = new EventEmitter(true);

  @Output()
  minimumUploadsNotReached: EventEmitter<boolean> = new EventEmitter(true);

  @Input()
  files: any[] = [];

  @Input()
  invalidFiles: any[] = [];

  @Input()
  minimumUploads = 0;

  @Input()
  maximumUploads = 50;

  @Input()
  alwaysShowInput = true;

  @Input()
  multipleUpload = true;

  @Input()
  acceptedFileTypes: string[] = [];

  @ContentChild(FileUploadInputDirective, { read: TemplateRef, static: true })
  public inputTemplate: TemplateRef<any>;

  @ContentChild(FileUploadItemDirective, { read: TemplateRef, static: true })
  public itemTemplate: TemplateRef<any>;

  @ContentChild(FileUploadInvalidItemDirective, { read: TemplateRef, static: true })
  public invalidItemTemplate: TemplateRef<any>;

  @ViewChild('newFileInputTrigger', { static: true })
  protected fileUploadInputTrigger: ElementRef<HTMLInputElement>;

  @ViewChild('replacementFileInputTrigger', { static: true })
  protected replacementFileInputTrigger: ElementRef<HTMLInputElement>;

  protected dirty = false;

  protected fileDeleted = false;

  protected componentSubscriptions: Subscription = new Subscription();

  constructor(
    protected fileUploadService: FileUploadService,
    protected fileUploadEventService: FileUploadEventService
  ) {
    this.listenForCreateEvents();
    this.listenForDeleteEvents();
    this.listenForPreviewEvents();
    this.listenForReuploadEvents();
    this.listenForItemCountChanges();
  }

  ngOnInit(): void {
    this.fileUploadService.setTotalFileCount(this.files.length);
  }

  ngOnDestroy(): void {
    this.componentSubscriptions.unsubscribe();
  }

  ngOnChanges(_: SimpleChanges): void {
    if (this.fileDeleted) {
      this.uploadLimitReached.emit(this.files.length > this.maximumUploads);
      this.fileUploadService.setTotalFileCount(this.files.length);
      this.fileDeleted = !this.fileDeleted;
    }
  }

  protected listenForPreviewEvents(): void {
    this.listenToEventWithType(FileUploadPreviewFileEvent, ({ file }) => this.itemClicked.emit(file));
  }

  protected listenForCreateEvents(): void {
    this.listenToEventWithType(FileUploadCreateFileEvent, (_) => this.fileUploadInputTrigger.nativeElement.click());
  }

  protected listenForReuploadEvents(): void {
    this.listenToEventWithType(FileUploadReplaceFileEvent, ({ file }) => {
      this.dirty = true;
      this.fileUploadService.setFileToBeReplaced(file);
      this.replacementFileInputTrigger.nativeElement.click();
    });
  }

  protected listenForDeleteEvents(): void {
    this.listenToEventWithType(FileUploadDeleteFileEvent, ({ file }) => {
      this.dirty = true;
      this.fileDeleted = true;
      const modifiedItemIndex = this.files.findIndex((fileUploadFile) => fileUploadFile === file);
      this.itemRemoved.emit({ modifiedItem: file, modifiedItemIndex });
    });
  }

  protected listenForItemCountChanges(): void {
    const itemCountChangesSub = this.fileUploadService.totalFileCount$.subscribe((currTotalFiles) => {
      if (this.dirty) {
        this.minimumUploadsNotReached.emit(currTotalFiles < this.minimumUploads);
      }
    });
    this.componentSubscriptions.add(itemCountChangesSub);
  }

  protected listenToEventWithType<E extends FileUploadEvent>(
    eventType: Type<E>,
    onEventEmitted?: (event: E) => void
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

    this.dirty = true;
  }

  public handleFileInputChange(event: Event): void {
    const eventFiles: FileList = (event.target as any).files;

    const rawFiles$ = this.fileUploadService
      .convertHtmlFilesToRawFiles(eventFiles, this.acceptedFileTypes, this.maximumUploads)
      .pipe(take(eventFiles.length + 1));

    const validRawFiles$ = rawFiles$.pipe(filter((rawFile) => !rawFile.invalid));
    const invalidRawFiles$ = rawFiles$.pipe(filter((rawFile) => rawFile.invalid));

    validRawFiles$
      .pipe(withLatestFrom(this.fileUploadService.totalFileCount$))
      .subscribe(([validRawFile, totalFileCount]) => {
        if (validRawFile.rejected) {
          this.uploadLimitReached.emit(true);
          return;
        }

        this.fileAdded.emit({ rawFile: validRawFile });
        this.fileUploadService.setTotalFileCount(totalFileCount + 1);
      });
    invalidRawFiles$.subscribe((invalidRawFile) => this.invalidFileAdded.emit({ rawFile: invalidRawFile }));

    this.dirty = true;
  }
}
