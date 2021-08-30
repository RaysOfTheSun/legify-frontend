import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { SubformComponent } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { Customer, RequiredDocument } from '../../../../models';
import { ApplyBasicInfoConfigService } from '../../services';

@Component({
  selector: 'legify-web-contact-info-subform',
  templateUrl: './contact-info-subform.component.html',
  styleUrls: ['./contact-info-subform.component.scss']
})
export class ContactInfoSubformComponent extends SubformComponent implements OnInit {
  @Input()
  formOwner: Customer;

  constructor(
    public controlContainer: ControlContainer,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService
  ) {
    super(controlContainer);
  }

  getRequiredDocument(): Observable<RequiredDocument> {
    return this.applyBasicInfoConfigService.getDocumentRequirementByDocumentType('RESIDENCY_CARD');
  }
}
