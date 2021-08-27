import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LazilyRenderedComponent } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { PersonBasicInfoFormModalData } from '../../models';

@Component({
  selector: 'legify-web-person-basic-info-modal',
  templateUrl: './person-basic-info-modal.component.html',
  styleUrls: ['./person-basic-info-modal.component.scss']
})
export class PersonBasicInfoModalComponent implements OnInit {
  public formGroup$: Observable<FormGroup>;
  public subforms: LazilyRenderedComponent[];

  constructor(@Inject(MAT_DIALOG_DATA) protected data: PersonBasicInfoFormModalData) {
    this.subforms = this.data.subforms;
    this.formGroup$ = this.data.formGroup;
  }

  ngOnInit(): void {}
}
