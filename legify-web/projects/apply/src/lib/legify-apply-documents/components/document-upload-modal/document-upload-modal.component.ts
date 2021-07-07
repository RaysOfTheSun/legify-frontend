import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LegifyDocumentRequirement } from '../../../models';
import { LegifyApplyPersonMapperService } from '../../../services';
import { DocumentUploadModalData } from '../../models';

@Component({
  selector: 'legify-web-document-upload-modal',
  templateUrl: './document-upload-modal.component.html',
  styleUrls: ['./document-upload-modal.component.scss']
})
export class DocumentUploadModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DocumentUploadModalData,
    protected legifyApplyPersonMapper: LegifyApplyPersonMapperService
  ) {}

  ngOnInit(): void {}

  get modalOwner(): string {
    return this.legifyApplyPersonMapper.getPersonName(this.data.person);
  }

  get requiredDocuments(): Observable<LegifyDocumentRequirement[]> {
    return this.data.requiredDocuments;
  }
}
