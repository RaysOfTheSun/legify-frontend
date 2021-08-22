import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { InputField } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-personal-info-form-group-section',
  templateUrl: './personal-info-form-group-section.component.html',
  styleUrls: ['./personal-info-form-group-section.component.scss']
})
export class PersonalInfoFormGroupSectionComponent implements OnInit {
  nameInfoFields: InputField[] = [
    {
      label: 'Given Name',
      name: 'first'
    },
    {
      label: 'Surname',
      name: 'last'
    }
  ];

  birthInfoFields: InputField[] = [
    {
      label: 'gender',
      name: 'gender'
    },
    {
      label: 'Date of Birth',
      name: 'dateOfBirth',
      type: 'date'
    },
    {
      label: 'age',
      name: 'age'
    }
  ];

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  get hasAlternateName(): boolean {
    // return this.parentFormGroup && this.parentFormGroup.get('nameInfo.hasAlternateName').value;
    return false;
  }
}
