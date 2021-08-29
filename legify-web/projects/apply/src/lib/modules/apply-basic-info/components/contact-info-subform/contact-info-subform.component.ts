import { Component, OnInit } from '@angular/core';
import { SubformComponent, FileUploaderGroupInfo } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-contact-info-subform',
  templateUrl: './contact-info-subform.component.html',
  styleUrls: ['./contact-info-subform.component.scss']
})
export class ContactInfoSubformComponent extends SubformComponent implements OnInit {
  get groupInfo(): FileUploaderGroupInfo {
    return {
      groupHeaderText: 'PROOF_OF_RESIDENCY_COPY',
      groupSubHeaderText: 'PROOF_OF_RESIDENCY_COPY_HINT',
      maximumUploads: 4,
      minimumUploads: 3,
      isGroupHeaderTextBold: true
    };
  }
}
