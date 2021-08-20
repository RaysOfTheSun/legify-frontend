import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileUploaderGroupChange, FileUploaderGroupInfo, LegifyFile } from '../../models';

@Component({
  selector: 'legify-web-file-uploader-group',
  templateUrl: './file-uploader-group.component.html',
  styleUrls: ['./file-uploader-group.component.scss']
})
export class FileUploaderGroupComponent implements OnInit {
  @Input() items: LegifyFile[] = [];
  @Input() groupInfo: FileUploaderGroupInfo;

  @Output() handleFileUpload: EventEmitter<FileUploaderGroupChange> = new EventEmitter();
  @Output() handleFilePreview: EventEmitter<FileUploaderGroupChange> = new EventEmitter();
  @Output() handleFileDelete: EventEmitter<LegifyFile> = new EventEmitter();

  @ViewChild('fileUploader', { static: true })
  protected fileUploader: ElementRef<HTMLInputElement>;

  get isAtMaximumUploads(): boolean {
    return this.items.length >= this.groupInfo.maximumUploads;
  }

  public handleFileUploaderClick(): void {
    this.fileUploader.nativeElement.click();
  }

  public publishFileUpload(event: any): void {
    const rawFiles: FileList = event.target.files;
    this.handleFileUpload.emit({
      rawFile: rawFiles[0],
      ...this.groupInfo
    });
  }

  public publishDeleteEvent(legifyFile: LegifyFile): void {
    this.handleFileDelete.emit(legifyFile);
  }

  public publishFilePreviewEvent(legifyFile: LegifyFile): void {
    this.handleFilePreview.emit({
      legifyFile,
      ...this.groupInfo
    });
  }

  ngOnInit(): void {}
}
