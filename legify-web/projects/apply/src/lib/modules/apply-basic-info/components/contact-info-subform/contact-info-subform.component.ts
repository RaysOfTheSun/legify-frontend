import { Component, Inject, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { SubformComponent } from '@legify/web-ui-elements';
import { CONTACT_INFO_SUBFORM_CONFIG } from '../../constants';

@Component({
  selector: 'legify-web-contact-info-subform',
  templateUrl: './contact-info-subform.component.html',
  styleUrls: ['./contact-info-subform.component.scss']
})
export class ContactInfoSubformComponent extends SubformComponent implements OnInit {
  constructor(public controlContainer: ControlContainer, @Inject(CONTACT_INFO_SUBFORM_CONFIG) public fields: any) {
    super(controlContainer);
  }

  ngOnInit(): void {}
}
