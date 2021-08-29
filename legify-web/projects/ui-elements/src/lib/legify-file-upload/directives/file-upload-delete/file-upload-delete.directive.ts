import { Directive, Input } from '@angular/core';
import { FileUploadDeleteFileEvent, FileUploadEvent } from '../../constants';
import { FileUploadEventDirective } from '../file-upload-event/file-upload-event.directive';

@Directive({
  selector: '[legifyWebFileUploadDelete]'
})
export class FileUploadDeleteDirective extends FileUploadEventDirective {
  @Input('legifyWebFileUploadDelete')
  public fileToDelete: any;

  public getEventToPublish(): FileUploadEvent {
    if (!this.fileToDelete) {
      throw new Error(
        'The legifyWebFileUploadDelete directive requires that you bind a value to it. But, none was found'
      );
    }
    return new FileUploadDeleteFileEvent(this.fileToDelete);
  }
}
