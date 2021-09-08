import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormSectionData } from '@legify/web-ui-elements';
import { Customer } from '../../../../models';
import { PersonalInfoSubformFieldGroupMap } from '../../models';

@Component({
  selector: 'legify-web-personal-info-subform',
  templateUrl: './personal-info-subform.component.html',
  styleUrls: ['./personal-info-subform.component.scss']
})
export class PersonalInfoSubformComponent implements OnInit {
  @Input()
  fieldGroupMap: PersonalInfoSubformFieldGroupMap;

  @Input()
  formSectionData: FormSectionData;

  @Input()
  formOwner: Customer;

  constructor(public controlContainer: ControlContainer) {}

  get hasAlternateName(): boolean {
    return (
      this.controlContainer.control &&
      this.controlContainer.control.get(['personalInfo', 'alternateNameInfo', 'hasAlternateName']).value
    );
  }

  ngOnInit(): void {}
}
