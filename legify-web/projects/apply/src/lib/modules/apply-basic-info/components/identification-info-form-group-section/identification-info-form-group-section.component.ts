import { Component, Input, OnInit } from '@angular/core';
import { FormGroupSectionComponent, FileUploaderGroupInfo } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-identification-info-form-group-section',
  templateUrl: './identification-info-form-group-section.component.html',
  styleUrls: ['./identification-info-form-group-section.component.scss']
})
export class IdentificationInfoFormGroupSectionComponent extends FormGroupSectionComponent implements OnInit {
  @Input() identificationTyepes: string[] = ['id', 'passport'];

  ngOnInit(): void {}

  get groupInfo(): FileUploaderGroupInfo {
    return {
      groupHeaderText:
        this.parentFormGroup && this.parentFormGroup.get(['identificationInfo', 'type']).value.toUpperCase(),
      groupSubHeaderText: '',
      maximumUploads: 1,
      minimumUploads: 0
    };
  }
}
