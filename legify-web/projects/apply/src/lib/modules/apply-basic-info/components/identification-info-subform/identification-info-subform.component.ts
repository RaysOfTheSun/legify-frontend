import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';
import { Customer, RequiredDocument } from '../../../../models';
import { ApplyBasicInfoConfigService } from '../../services';
import { FormSectionData } from '@legify/web-ui-elements';
import { IdentificationInfoSubformFieldGroupMap } from '../../models';

@Component({
  selector: 'legify-web-identification-info-subform',
  templateUrl: './identification-info-subform.component.html',
  styleUrls: ['./identification-info-subform.component.scss']
})
export class IdentificationInfoSubformComponent implements OnInit {
  @Input()
  fieldGroupMap: IdentificationInfoSubformFieldGroupMap[];

  @Input()
  formSectionData: FormSectionData;

  @Input()
  formOwner: Customer;

  constructor(
    public controlContainer: ControlContainer,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService
  ) {}

  ngOnInit(): void {}

  get selectedIdType(): string {
    return (
      this.controlContainer.control &&
      this.controlContainer.control.get(['identificationInfo', 'type']).value.toUpperCase()
    );
  }

  getRequiredDocument(): Observable<RequiredDocument> {
    console.log(this.selectedIdType);
    return this.applyBasicInfoConfigService.getDocumentRequirementByDocumentType(this.selectedIdType);
  }
}
