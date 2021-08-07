import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'legify-web-document-upload-uploader',
  templateUrl: './document-upload-uploader.component.html',
  styleUrls: ['./document-upload-uploader.component.scss']
})
export class DocumentUploadUploaderComponent {
  @Output() handleClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  public publishClickEvent(): void {
    this.handleClick.emit(true);
  }
}
