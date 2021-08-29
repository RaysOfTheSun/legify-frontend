import { Directive, Input } from '@angular/core';
import { FileUploadEvent, FileUploadReplaceFileEvent } from '../../constants';
import { FileUploadEventDirective } from '../file-upload-event/file-upload-event.directive';

@Directive({
  selector: '[legifyWebFileUploadReupload]'
})
export class FileUploadReuploadDirective extends FileUploadEventDirective {
  @Input('legifyWebFileUploadReupload')
  protected fileToReupload: any;

  getEventToPublish(): FileUploadEvent {
    if (!this.fileToReupload) {
      throw new Error(
        'The legifyWebFileUploadPreview directive requires that you bind a value to it. But, none was found'
      );
    }
    return new FileUploadReplaceFileEvent(this.fileToReupload);
  }
}
