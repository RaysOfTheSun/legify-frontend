import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormSectionData, Field } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { Customer, RequiredDocument } from '../../../../models';
import { ContactInfoSubformFieldGroupMap } from '../../models';
import { ApplyBasicInfoConfigService } from '../../services';

@Component({
  selector: 'legify-web-contact-info-subform',
  templateUrl: './contact-info-subform.component.html',
  styleUrls: ['./contact-info-subform.component.scss']
})
export class ContactInfoSubformComponent implements OnInit {
  @Input()
  fieldGroupMap: ContactInfoSubformFieldGroupMap[];

  @Input()
  formSectionData: FormSectionData;

  @Input()
  formOwner: Customer;

  constructor(
    public controlContainer: ControlContainer,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService
  ) {}

  getRequiredDocument(): Observable<RequiredDocument> {
    return this.applyBasicInfoConfigService.getDocumentRequirementByDocumentType('RESIDENCY_CARD');
  }

  ngOnInit(): void {}
}
