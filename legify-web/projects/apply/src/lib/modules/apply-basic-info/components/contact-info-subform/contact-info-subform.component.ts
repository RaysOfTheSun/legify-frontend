import { Component, OnInit } from '@angular/core';
import { SubformComponent, FileUploaderGroupInfo } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-contact-info-subform',
  templateUrl: './contact-info-subform.component.html',
  styleUrls: ['./contact-info-subform.component.scss']
})
export class ContactInfoSubformComponent extends SubformComponent implements OnInit {
  get groupInfo() {
    return {
      documentType: 'PAYMENT_RECEIPT',
      documentCategory: 'RECEIPT',
      maximumUploads: 4,
      minimumUploads: 2,
      isGroupHeaderTextBold: true
    };
  }
}
