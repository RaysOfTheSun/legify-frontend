import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { concat, zip } from 'rxjs';
import { take } from 'rxjs/operators';
import { FileUploadInputDirective, FileUploadPreviewItemDirective } from './directives';
import { FileUploadEvent } from './models';
import { FileUploadService } from './services';

@Component({
  selector: 'legify-web-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() fileAdded: EventEmitter<any> = new EventEmitter();
  @Output() previewClicked: EventEmitter<any> = new EventEmitter();
  @Output() invalidFileAdded: EventEmitter<any> = new EventEmitter();

  @Input() files: any[];
  @Input() invalidFiles: any[];

  @Input() minimumUploads = -1;
  @Input() maximumUploads = -1;
  @Input() alwaysShowInput = true;
  @Input() acceptedFileTypes: string[] = [];

  @ContentChild(FileUploadInputDirective, { read: TemplateRef, static: true })
  public inputItemTemplate: TemplateRef<any>;

  @ContentChild(FileUploadPreviewItemDirective, { read: TemplateRef, static: true })
  public itemPreviewTemplate: TemplateRef<any>;

  @ContentChild(FileUploadInputDirective, { read: TemplateRef, static: true })
  public invalidItemPreviewTemplate: TemplateRef<any>;

  @ViewChild('fileUploadInput', { static: true })
  protected fileUploadInput: ElementRef<HTMLInputElement>;

  constructor(protected fileUploadService: FileUploadService) {}

  ngOnInit(): void {
    this.fileUploadService.setTotalFileCount(this.files.length);
  }

  public handleInputClick(event: Event): void {
    this.fileUploadInput.nativeElement.click();
  }

  public publishPreviewEvent(event: Event, item, itemIndex: number): void {
    event.stopPropagation();
    this.previewClicked.emit({ item, itemIndex });
  }

  public isFileInputShown(): boolean {
    return this.alwaysShowInput
      ? true
      : !this.fileUploadService.isFileUploadLimitReached(this.files, this.maximumUploads);
  }

  public handleFileInputChange(event: Event & FileUploadEvent): void {
    const eventFiles: FileList = event.target.files;

    const rawFiles$ = this.fileUploadService
      .addAndValidateFiles(eventFiles, this.acceptedFileTypes, this.maximumUploads)
      .pipe(take(eventFiles.length + 1));

    rawFiles$.subscribe((rawFile) => {
      if (rawFile.rejected) {
        this.invalidFileAdded.emit(rawFile);
        return;
      }

      this.fileAdded.emit(rawFile);
    });
  }
}
