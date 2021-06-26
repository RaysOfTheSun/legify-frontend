import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../../../models';
import { LegifyApplyPersonMapperService } from '../../../services';

@Component({
  selector: 'legify-web-document-upload-modal',
  templateUrl: './document-upload-modal.component.html',
  styleUrls: ['./document-upload-modal.component.scss']
})
export class DocumentUploadModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public person: Person,
    protected legifyApplyPersonMapper: LegifyApplyPersonMapperService
  ) {}

  ngOnInit(): void {}

  get modalOwner(): string {
    return this.legifyApplyPersonMapper.getPersonName(this.person);
  }
}
