import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { get } from 'lodash-es';
import { LEGIFY_FORM_CONTROL_VALIDATOR_MAP } from './constants/legify-form-control-validator-map';
import { LegifyFormControlConfig, LegifyFormControlGroupConfig } from './models';

@Component({
  selector: 'legify-web-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewChecked {
  @Input() group: FormGroup;
  @Input() groups: LegifyFormControlGroupConfig[];
  @Input() dataSource: any;

  constructor(protected chnageDetectorRef: ChangeDetectorRef) {}

  get sections(): LegifyFormControlGroupConfig[] {
    return this.groups;
  }

  protected getFormControlConfigsForGroup(formControlGroup: LegifyFormControlGroupConfig): Record<string, FormControl> {
    const flattenedControlArr = formControlGroup.controls.reduce((acc, currArr) => acc.concat(...currArr), []);

    return flattenedControlArr.reduce((acc, controlConfig) => {
      acc[controlConfig.name.trim()] = new FormControl(
        { value: get(this.dataSource, controlConfig.dataBinding), disabled: !!controlConfig.disabled },
        this.getValidatorsForControlByConfig(controlConfig)
      );
      return acc;
    }, {});
  }

  protected getValidatorsForControlByConfig(controlConfig: LegifyFormControlConfig): any[] {
    return controlConfig.validators
      ? controlConfig.validators.map((validatorType) => LEGIFY_FORM_CONTROL_VALIDATOR_MAP.get(validatorType))
      : [];
  }

  get formControlConfigs(): Record<string, FormControl> {
    return this.groups.reduce((acc, group) => {
      acc[group.name.trim()] = new FormGroup(this.getFormControlConfigsForGroup(group));
      return acc;
    }, {});
  }

  ngOnInit(): void {
    this.group = new FormGroup(this.formControlConfigs);
    console.log(this.group);
    this.group.valueChanges.subscribe(console.log);
  }

  ngAfterViewChecked(): void {
    this.chnageDetectorRef.detectChanges();
  }
}
