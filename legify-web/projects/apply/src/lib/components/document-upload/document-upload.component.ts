import { Component, OnInit } from '@angular/core';
import { RawFile } from '@legify/web-ui-elements';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'legify-web-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {
  public subj = new BehaviorSubject([]);

  constructor() {}

  ngOnInit(): void {}

  handleItemPreviewClick($event) {
    console.log($event);
  }

  public handleInvalidFileAdded(rawFile: RawFile): void {
    console.log(rawFile);
  }

  handleFileAdded(rawFile: RawFile): void {
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
