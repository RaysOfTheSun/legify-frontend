import { Component, OnInit } from '@angular/core';
import { LegifyFormControlGroupConfig, LEGIFY_FORM_CONTROL_TYPE } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import { LegifyApplication, Person } from '../../models';
import { ApplyService } from '../../services';

@Component({
  selector: 'legify-web-apply-basic-info',
  templateUrl: './apply-basic-info.component.html',
  styleUrls: ['./apply-basic-info.component.scss']
})
export class ApplyBasicInfoComponent implements OnInit {
  controls: LegifyFormControlGroupConfig[];

  constructor(protected applyService: ApplyService) {}

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
      },
      {
        name: 'nameInfo',
        icon: '',
        title: '',
        controls: [
          {
            type: LEGIFY_FORM_CONTROL_TYPE.TEXTBOX,
            inputType: 'text',
            name: 'first',
            label: '',
            dataBinding: 'personalInfo.nameInfo.first'
          },
          {
            type: LEGIFY_FORM_CONTROL_TYPE.TEXTBOX,
            inputType: 'text',
            name: 'middle',
            label: '',
            dataBinding: 'personalInfo.nameInfo.middle'
          },
          {
            type: LEGIFY_FORM_CONTROL_TYPE.TEXTBOX,
            inputType: 'text',
            name: 'last',
            label: '',
            dataBinding: 'personalInfo.nameInfo.last'
          },
          {
            name: 'alternateName',
            type: LEGIFY_FORM_CONTROL_TYPE.RADIO_GROUP,
            label: 'Is this an alternate name?',
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

  get formDataSource(): Observable<Person> {
    return this.applyService.getCurrCustomer();
  }
}
