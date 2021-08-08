import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { get } from 'lodash-es';
import { LegifyFormControlConfig, LegifyFormControlGroupConfig } from '../../models';

@Component({
  selector: 'legify-web-form-control-group',
  templateUrl: './form-control-group.component.html',
  styleUrls: ['./form-control-group.component.scss']
})
export class FormControlGroupComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() config: LegifyFormControlGroupConfig;
  @Input() dataSource: any;

  constructor() {}

  get groupIcon(): string {
    return this.config.icon || '';
  }

  get groupTitle(): string {
    return this.config.title;
  }

  get controlSets(): LegifyFormControlConfig[][] {
    return this.config.controls;
  }

  get groupName(): string {
    return this.config.name;
  }

  public getControlNameFromConfig(controlConfig: LegifyFormControlConfig): string {
    return controlConfig.name;
  }

  ngOnInit(): void {}
}
