import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConsumerDataService } from '../../../../services';
import { DocumentUploadModalData } from '../../models';
import { ApplyDocumentsService } from '../../services';
import { SupportingDocument } from '../../../apply-document-upload';
import { first } from 'rxjs/operators';

@Component({
  selector: 'legify-web-document-upload-modal',
  templateUrl: './document-upload-modal.component.html',
  styleUrls: ['./document-upload-modal.component.scss']
})
export class DocumentUploadModalComponent implements OnInit {
  public modalOwnerName: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DocumentUploadModalData,
    protected consumerDataService: ConsumerDataService,
    protected applyDocumentService: ApplyDocumentsService
  ) {}

  ngOnInit(): void {
    this.modalOwnerName = this.consumerDataService.getConsumerName(this.data.customer);
  }

  public handleDocumentDeleted(_: SupportingDocument[]): void {
    this.applyDocumentService.updateProgressForPersonAndModule(this.data.customer).subscribe();
  }

  public handleDocumentUploaded(_: SupportingDocument[]): void {
    this.applyDocumentService.updateProgressForPersonAndModule(this.data.customer).pipe(first()).subscribe();
  }
}
