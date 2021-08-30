import { Component, OnInit } from '@angular/core';
import { SubformComponent } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-contact-info-subform',
  templateUrl: './contact-info-subform.component.html',
  styleUrls: ['./contact-info-subform.component.scss']
})
export class ContactInfoSubformComponent extends SubformComponent implements OnInit {}
