import { Component, OnInit } from '@angular/core';
import { SubformComponent } from '@legify/web-ui-elements';
import { PersonalInfoSubformFieldGroupMap } from '../../models';

@Component({
  selector: 'legify-web-personal-info-subform',
  templateUrl: './personal-info-subform.component.html',
  styleUrls: ['./personal-info-subform.component.scss']
})
export class PersonalInfoSubformComponent extends SubformComponent<PersonalInfoSubformFieldGroupMap> implements OnInit {
  get hasAlternateName(): boolean {
    return (
      this.controlContainer.control &&
      this.controlContainer.control.get(['personalInfo', 'alternateNameInfo', 'hasAlternateName']).value
    );
  }
}
