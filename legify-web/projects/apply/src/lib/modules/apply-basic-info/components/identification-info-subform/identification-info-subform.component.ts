import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { SubformComponent } from '@legify/web-ui-elements';
import { LegifyTranslationService } from '@legify/web-i18n';
import { Observable } from 'rxjs';
import { Customer, RequiredDocument } from '../../../../models';
import { ApplyBasicInfoConfigService } from '../../services';

@Component({
  selector: 'legify-web-identification-info-subform',
  templateUrl: './identification-info-subform.component.html',
  styleUrls: ['./identification-info-subform.component.scss']
})
export class IdentificationInfoSubformComponent extends SubformComponent implements OnInit {
  @Input()
  formOwner: Customer;

  constructor(
    public controlContainer: ControlContainer,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService
  ) {
    super(controlContainer);
  }

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
