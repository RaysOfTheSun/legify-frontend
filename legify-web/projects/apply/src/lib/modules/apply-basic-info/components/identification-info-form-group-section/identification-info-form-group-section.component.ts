import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FileUploaderGroupInfo, SelectableField, InputField } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-identification-info-form-group-section',
  templateUrl: './identification-info-form-group-section.component.html',
  styleUrls: ['./identification-info-form-group-section.component.scss']
})
export class IdentificationInfoFormGroupSectionComponent implements OnInit {
  public radios: SelectableField[] = [
    {
      label: 'ID Type',
      name: 'type',
      options: [
        {
          label: 'Passport',
          value: 'passport',
          row: 0
        },
        {
          label: 'national id',
          value: 'national_id',
          row: 0
        }
      ]
    }
  ];

  public inputs: InputField[] = [
    {
      label: 'ID Number',
      name: 'number'
    },
    {
      label: 'Issue Date',
      name: 'issueDate',
      type: 'date'
    }
  ];

  constructor(public controlContainer: ControlContainer) {}

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
      groupSubHeaderText: `Please upload a copy of your ${this.selectedIdType}`,
      maximumUploads: 1,
      minimumUploads: 0,
      isGroupHeaderTextBold: true
    };
  }
}
