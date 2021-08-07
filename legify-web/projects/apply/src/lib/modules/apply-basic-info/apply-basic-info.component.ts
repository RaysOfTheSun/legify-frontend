import { Component, OnInit } from '@angular/core';
import { LegifyFormControlGroupConfig, LEGIFY_FORM_CONTROL_TYPE } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-apply-basic-info',
  templateUrl: './apply-basic-info.component.html',
  styleUrls: ['./apply-basic-info.component.scss']
})
export class ApplyBasicInfoComponent implements OnInit {
  controls: LegifyFormControlGroupConfig[];

  constructor() {}

  ngOnInit(): void {
    this.controls = [
      {
        icon: '',
        title: '',
        name: 'group1',
        controls: [
          {
            name: 'question1',
            type: LEGIFY_FORM_CONTROL_TYPE.RADIO_GROUP,
            label: 'question 1',
            children: [
              {
                value: 'yes',
                label: 'yes'
              },
              {
                value: 'no',
                label: 'no'
              }
            ]
          }
        ]
      },
      {
        icon: '',
        title: '',
        name: 'group2',
        controls: [
          {
            name: 'question1',
            type: LEGIFY_FORM_CONTROL_TYPE.RADIO_GROUP,
            label: 'g2 - question 1',
            children: [
              {
                value: 'yes',
                label: 'yes'
              },
              {
                value: 'no',
                label: 'no'
              }
            ]
          },
          {
            name: 'question2',
            type: LEGIFY_FORM_CONTROL_TYPE.RADIO_GROUP,
            label: 'g2 - question 2',
            children: [
              {
                value: 'yes',
                label: 'yes'
              },
              {
                value: 'no',
                label: 'no'
              }
            ]
          }
        ]
      }
    ];
  }
}
