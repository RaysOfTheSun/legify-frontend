import { Component, Input, OnDestroy, OnInit, Optional, Self, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { LegifyFormControl } from '../../classes';
import { LEGIFY_FORM_CONTROL_TYPE } from '../../constants';
import { LegifyFormControlConfig } from '../../models';
import { RadioButtonGroupFormControlComponent } from '../radio-button-group-form-control/radio-button-group-form-control.component';

@Component({
  selector: 'legify-web-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent extends LegifyFormControl implements OnInit, OnDestroy {
  @Input() config: LegifyFormControlConfig;
  @Input() dataSource: any;

  @ViewChild('radio_group', { static: true })
  protected radioButtonGroupTemplate: TemplateRef<RadioButtonGroupFormControlComponent>;

  @ViewChild('textbox', { static: true })
  protected textboxTemplate: TemplateRef<HTMLInputElement>;

  protected templateMap: Map<LEGIFY_FORM_CONTROL_TYPE, TemplateRef<any>> = new Map();

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

  get controlTemplate(): TemplateRef<any> {
    return this.templateMap.get(this.config.type);
  }

  ngOnInit(): void {
    this.templateMap.set(LEGIFY_FORM_CONTROL_TYPE.TEXTBOX, this.textboxTemplate);
    this.templateMap.set(LEGIFY_FORM_CONTROL_TYPE.RADIO_GROUP, this.radioButtonGroupTemplate);
  }

  ngOnDestroy(): void {
    this.destoryLegifyFormControl();
  }
}
