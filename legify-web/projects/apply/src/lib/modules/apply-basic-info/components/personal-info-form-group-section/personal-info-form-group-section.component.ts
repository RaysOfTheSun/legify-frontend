import { Component, OnInit } from '@angular/core';
import { FormGroupSectionComponent } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-personal-info-form-group-section',
  templateUrl: './personal-info-form-group-section.component.html',
  styleUrls: ['./personal-info-form-group-section.component.scss']
})
export class PersonalInfoFormGroupSectionComponent extends FormGroupSectionComponent implements OnInit {
  ngOnInit(): void {}

  get hasAlternateName(): boolean {
    return this.parentFormGroup && this.parentFormGroup.get('nameInfo.hasAlternateName').value;
  }
}
