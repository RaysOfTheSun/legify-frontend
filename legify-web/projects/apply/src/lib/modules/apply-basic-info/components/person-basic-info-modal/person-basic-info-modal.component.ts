import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormComponentPropertyMap, PersonBasicInfoFormModalData } from '../../models';

@Component({
  selector: 'legify-web-person-basic-info-modal',
  templateUrl: './person-basic-info-modal.component.html',
  styleUrls: ['./person-basic-info-modal.component.scss']
})
export class PersonBasicInfoModalComponent implements OnInit {
  public formSections: any[];
  public componentPropertyMapping$: Observable<FormComponentPropertyMap>;

  constructor(@Inject(MAT_DIALOG_DATA) protected data: PersonBasicInfoFormModalData) {
    this.formSections = this.data.sections;
    this.componentPropertyMapping$ = this.data.componentPropertyMapping;
  }

  ngOnInit(): void {}
}
