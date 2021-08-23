import { Component, Inject, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { SubformComponent, FileUploaderGroupInfo } from '@legify/web-ui-elements';
import { IDENTIFICATION_INFO_SUBFORM_CONFIG } from '../../constants';
import { IdentificationInfoSubFormConfig } from '../../models';
import { LegifyTranslationService } from '@legify/web-i18n';

@Component({
  selector: 'legify-web-identification-info-subform',
  templateUrl: './identification-info-subform.component.html',
  styleUrls: ['./identification-info-subform.component.scss']
})
export class IdentificationInfoSubformComponent extends SubformComponent implements OnInit {
  constructor(
    public controlContainer: ControlContainer,
    @Inject(IDENTIFICATION_INFO_SUBFORM_CONFIG) public fields: IdentificationInfoSubFormConfig,
    protected legifyTranslationService: LegifyTranslationService
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

  get groupInfo(): FileUploaderGroupInfo {
    return {
      groupHeaderText: `COPY_OF_${this.selectedIdType}`,
      groupSubHeaderText: this.legifyTranslationService.translate(`${this.selectedIdType}_UPLOAD_HINT`, null),
      maximumUploads: 1,
      minimumUploads: 0,
      isGroupHeaderTextBold: true
    };
  }
}
