import { Component, Inject, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { SubformComponent } from '@legify/web-ui-elements';
import { PERSONAL_INFO_SUBFORM_CONFIG } from '../../constants';
import { PersonalInfoSubFormConfig } from '../../models';

@Component({
  selector: 'legify-web-personal-info-subform',
  templateUrl: './personal-info-subform.component.html',
  styleUrls: ['./personal-info-subform.component.scss']
})
export class PersonalInfoSubformComponent extends SubformComponent implements OnInit {
  constructor(
    public controlContainer: ControlContainer,
    @Inject(PERSONAL_INFO_SUBFORM_CONFIG) public fields: PersonalInfoSubFormConfig
  ) {
    super(controlContainer);
  }

  ngOnInit(): void {}
}
