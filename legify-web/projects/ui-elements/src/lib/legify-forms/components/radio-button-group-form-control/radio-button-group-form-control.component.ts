import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LegifyFormControlConfig } from '../../models';

@Component({
  selector: 'legify-web-radio-button-group-form-control',
  templateUrl: './radio-button-group-form-control.component.html',
  styleUrls: ['./radio-button-group-form-control.component.scss']
})
export class RadioButtonGroupFormControlComponent {
  @Input() config: LegifyFormControlConfig;
  @Input() control: FormControl;

  constructor() {}

  get children(): Partial<LegifyFormControlConfig>[] {
    return this.config.children;
  }

  get label(): string {
    return this.config.label;
  }
}
