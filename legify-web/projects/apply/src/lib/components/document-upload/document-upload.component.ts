import { Component, OnInit } from '@angular/core';
import { RawFile, FileUploadItemModified, FileUploadFileAdded } from '@legify/web-ui-elements';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'legify-web-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {
  public subj: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor() {}

  ngOnInit(): void {}

  handleItemRemoved({ modifiedItemIndex }: FileUploadItemModified): void {
    this.subj
      .pipe(
        map((files) => {
          const currFiles = [...files];
          currFiles.splice(modifiedItemIndex, 1);

          return currFiles;
        }),
        first()
      )
      .subscribe((updatedFiles) => this.subj.next(updatedFiles));
  }

  handleItemPreviewClick($event) {
    console.log($event);
  }

  handleMinimumUploadsNotReached(isMet: boolean) {
    console.log(isMet);
  }

  handleItemReplaced({ modifiedItemIndex, modifiedItemReplacement }: FileUploadItemModified): void {
    this.subj
      .pipe(
        map((files) => {
          const currFiles = [...files];
          currFiles.splice(modifiedItemIndex, 1, modifiedItemReplacement);

          return currFiles;
        }),
        first()
      )
      .subscribe((updatedFiles) => this.subj.next(updatedFiles));
  }

  public handleInvalidFileAdded(rawFile: RawFile): void {
    console.log(rawFile);
  }

  handleFileAdded({ rawFile }: FileUploadFileAdded): void {
    this.subj
      .pipe(
        map((files) => {
          const newFiles = [...files];
          newFiles.push(rawFile);

          return newFiles;
        }),
        first()
      )
      .subscribe((files) => this.subj.next(files));
  }

  get validFiles(): Observable<any[]> {
    return this.subj.asObservable().pipe(map((files) => files));
  }
}
