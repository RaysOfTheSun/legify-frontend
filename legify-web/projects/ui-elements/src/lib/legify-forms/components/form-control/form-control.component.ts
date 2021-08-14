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
export class FormControlComponent extends LegifyFormControl implements OnInit {
  @Input() config: LegifyFormControlConfig;
  @Input() dataSource: any;

  public controlTemplate: TemplateRef<any>;

  @ViewChild('radio_group', { static: true })
  protected radioButtonGroupTemplate: TemplateRef<RadioButtonGroupFormControlComponent>;

  @ViewChild('textbox', { static: true })
  protected textboxTemplate: TemplateRef<HTMLInputElement>;

  protected templateMap: Record<LEGIFY_FORM_CONTROL_TYPE, TemplateRef<any>> = {} as any;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

  get appearance(): string {
    return this.formControl.disabled ? 'none' : '';
  }

  ngOnInit(): void {
    this.templateMap[LEGIFY_FORM_CONTROL_TYPE.TEXTBOX] = this.textboxTemplate;
    this.templateMap[LEGIFY_FORM_CONTROL_TYPE.RADIO_GROUP] = this.radioButtonGroupTemplate;

    this.controlTemplate = this.templateMap[this.config.type];
  }
}
