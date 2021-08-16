import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroupComponent, LegifyFormFieldConfig } from '@legify/web-ui-elements';
import { get } from 'lodash-es';
import { ApplyService } from '../../../../services';
import { BASIC_INFO_FORM_SECTIONS } from '../../constants/injection-tokens';

@Component({
  selector: 'legify-web-person-basic-info-modal',
  templateUrl: './person-basic-info-modal.component.html',
  styleUrls: ['./person-basic-info-modal.component.scss']
})
export class PersonBasicInfoModalComponent implements OnInit {
  public formGroup: FormGroup;
  public formSections: FormGroupComponent[];

  get formFields(): LegifyFormFieldConfig[] {
    return [
      {
        forField: ['nameInfo', 'givenName'],
        dataPath: 'personalInfo.nameInfo.first'
      },
      {
        forField: ['nameInfo', 'surname'],
        dataPath: 'personalInfo.nameInfo.last'
      }
    ];
  }

  constructor(
    protected applyService: ApplyService,
    protected formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) protected data: any,
    @Inject(BASIC_INFO_FORM_SECTIONS) protected formSectionsMap: Map<string, FormGroupComponent[]>
  ) {
    this.formGroup = this.formBuilder.group({
      nameInfo: this.formBuilder.group({
        title: ['mr'],
        surname: ['', []],
        givenName: ['', []],
        hasAlternateName: [true],
        relationshipToInsured: ['spouse']
      }),
      birthInfo: this.formBuilder.group({
        age: [22],
        gender: ['Male'],
        dateOfBirth: []
      })
    });

    this.formFields.forEach((formField) =>
      this.formGroup.get(formField.forField).setValue(get(this.data.customer, formField.dataPath))
    );

    this.formSections = this.formSectionsMap.get('IO');
    this.formGroup.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {}
}
