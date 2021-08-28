import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, Observable, of } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { RawFile } from '../../models';

@Injectable()
export class FileUploadService {
  protected readonly totalFileCountSubj: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {}

  public setTotalFileCount(totalFileCount: number): void {
    this.totalFileCountSubj.next(totalFileCount);
  }

  public addAndValidateFiles(
    filesToAdd: FileList,
    acceptedFileTypes: string[],
    maximumUploads: number
  ): Observable<RawFile> {
    const htmlFiles = Array.from(filesToAdd);
    return this.convertHtmlFilesToRawFiles(htmlFiles, acceptedFileTypes).pipe(
      withLatestFrom(this.totalFileCountSubj),
      tap(([rawFile, totalFileCount]) => {
        if (rawFile.rejected) {
          return;
        }

        this.totalFileCountSubj.next(totalFileCount + 1);
      }),
      map(([rawFile, totalFileCount]) => ({
        rejected: !this.isFileTypeAccepted(rawFile.type, acceptedFileTypes) || totalFileCount + 1 > maximumUploads,
        ...rawFile
      }))
    );
  }

  public isFileUploadLimitReached(allFiles: any[], maximumUploads: number): boolean {
    return allFiles.length >= maximumUploads;
  }

  protected convertHtmlFilesToRawFiles(files: File[], acceptedTypes: string[]): Observable<RawFile> {
    const rawFileConversions$ = files.map((file) =>
      this.convertHtmlFileToBase64String(file, acceptedTypes).pipe(
        map<string, RawFile>((fileBase64String) => ({
          name: file.name,
          type: this.getFileType(file),
          size: file.size,
          base64: fileBase64String
        }))
      )
    );

    return concat(...rawFileConversions$);
  }

  protected convertHtmlFileToBase64String(file: File, acceptedFileTypes: string[]): Observable<string> {
    if (!this.isFileTypeAccepted(this.getFileType(file), acceptedFileTypes)) {
      return of(null);
    }

    return new Observable<string>((subscriber) => {
      const fileReader = new window.FileReader();
      fileReader.addEventListener('load', (_: any) => {
        subscriber.next(fileReader.result as string);
        subscriber.complete();
      });

      fileReader.readAsDataURL(file);
    });
  }

  protected isFileTypeAccepted(fileType: string, acceptedTypes: string[]): boolean {
    return acceptedTypes.length === 0 || acceptedTypes.includes(fileType);
  }

  protected getFileType(file: File): string {
    return file.type.split('/')[1];
  }
}
