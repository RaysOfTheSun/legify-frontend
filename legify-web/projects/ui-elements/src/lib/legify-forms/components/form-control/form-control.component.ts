import { Component, forwardRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LegifyFormControl } from '../../classes';
import { LEGIFY_FORM_CONTROL_TYPE } from '../../constants';
import { LegifyFormControlConfig } from '../../models';
import { RadioButtonGroupFormControlComponent } from '../radio-button-group-form-control/radio-button-group-form-control.component';

@Component({
  selector: 'legify-web-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormControlComponent),
      multi: true
    }
  ]
})
export class FormControlComponent extends LegifyFormControl implements OnInit, OnDestroy {
  @Input() config: LegifyFormControlConfig;

  @ViewChild('radio_group', { static: true })
  protected radioButtonGroupTemplate: TemplateRef<RadioButtonGroupFormControlComponent>;

  protected templateMap: Map<LEGIFY_FORM_CONTROL_TYPE, TemplateRef<any>> = new Map();

  constructor() {
    super();
    this.defaultValue = null;
  }

  get controlTemplate(): TemplateRef<any> {
    return this.templateMap.get(this.config.type);
  }

  ngOnInit(): void {
    this.templateMap.set(LEGIFY_FORM_CONTROL_TYPE.RADIO_GROUP, this.radioButtonGroupTemplate);
  }

  ngOnDestroy(): void {
    this.destoryLegifyFormControl();
  }
}
