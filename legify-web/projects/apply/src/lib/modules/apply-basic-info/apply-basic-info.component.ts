import { Component, OnInit } from '@angular/core';
import { LegifyRadioControlGroup, LegifyFormControlType } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-apply-basic-info',
  templateUrl: './apply-basic-info.component.html',
  styleUrls: ['./apply-basic-info.component.scss']
})
export class ApplyBasicInfoComponent implements OnInit {
  controls: LegifyRadioControlGroup[];

  constructor() {}

  ngOnInit(): void {
    this.controls = [
      {
        type: LegifyFormControlType.RADIO_GROUP,
        label: 'Question 1',
        name: 'sample',
        radios: [
          {
            type: LegifyFormControlType.RADIO,
            value: 'value 1',
            label: 'Option 1'
          },
          {
            type: LegifyFormControlType.RADIO,
            value: 'value 2',
            label: 'Option 2'
          }
        ]
      },
      {
        type: LegifyFormControlType.RADIO_GROUP,
        label: 'Question 2',
        name: 'sample2',
        radios: [
          {
            type: LegifyFormControlType.RADIO,
            value: 'value 1',
            label: 'Option 1'
          },
          {
            type: LegifyFormControlType.RADIO,
            value: 'value 2',
            label: 'Option 2'
          }
        ]
      }
    ];
  }
}
