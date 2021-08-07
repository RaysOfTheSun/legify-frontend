import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LegifyFormControlConfig, LegifyFormControlGroupConfig } from './models';

@Component({
  selector: 'legify-web-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() group: FormGroup;
  @Input() groups: LegifyFormControlGroupConfig[];

  constructor() {}

  get sections(): LegifyFormControlGroupConfig[] {
    return this.groups;
  }

  protected getFormControlConfigsForGroup(formControlGroup: LegifyFormControlGroupConfig): Record<string, FormControl> {
    return formControlGroup.controls.reduce((acc, controlConfig) => {
      acc[controlConfig.name] = new FormControl();
      return acc;
    }, {});
  }

  get formControlConfigs(): Record<string, FormControl> {
    return this.groups.reduce((acc, group) => {
      acc[group.name] = new FormGroup(this.getFormControlConfigsForGroup(group));
      return acc;
    }, {});
  }

  ngOnInit(): void {
    this.group = new FormGroup(this.formControlConfigs);
    this.group.valueChanges.subscribe(console.log);
  }
}
