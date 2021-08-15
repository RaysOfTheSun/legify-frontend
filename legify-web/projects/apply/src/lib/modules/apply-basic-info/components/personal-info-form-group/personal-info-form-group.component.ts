import { Component, OnInit } from '@angular/core';
import { FormGroupComponent } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-personal-info-form-group',
  templateUrl: './personal-info-form-group.component.html',
  styleUrls: ['./personal-info-form-group.component.scss']
})
export class PersonalInfoFormGroupComponent extends FormGroupComponent implements OnInit {
  ngOnInit(): void {}

  get hasAlternateName(): boolean {
    return this.parentFormGroup && this.parentFormGroup.get('nameInfo.hasAlternateName').value;
  }
}
