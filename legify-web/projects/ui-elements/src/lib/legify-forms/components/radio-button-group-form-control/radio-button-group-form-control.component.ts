import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LegifyFormControlConfig, LegifyRadioGroupFormControlConfig } from '../../models';

@Component({
  selector: 'legify-web-radio-button-group-form-control',
  templateUrl: './radio-button-group-form-control.component.html',
  styleUrls: ['./radio-button-group-form-control.component.scss']
})
export class RadioButtonGroupFormControlComponent {
  @Input() config: LegifyRadioGroupFormControlConfig;
  @Input() control: FormControl;

  constructor() {}

  get radios(): Partial<LegifyFormControlConfig>[] {
    return this.config.radios;
  }

  get label(): string {
    return this.config.label;
  }

  get isVertical(): boolean {
    return this.config.isVertical;
  }

  get groupCssClasses(): string[] {
    return this.config.isVertical
      ? ['radio-button-group__group', 'radio-button-group__group--vertical']
      : ['radio-button-group__group'];
  }

  get radioButtonCssClasses(): string[] {
    return this.config.isVertical
      ? ['radio-button-group__radio', 'radio-button-group__radio--vertical']
      : ['radio-button-group__radio'];
  }
}
