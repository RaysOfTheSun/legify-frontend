import { Component, Input, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { LegifyFormControl } from '../../models';
import { LegifyRadioControlGroup } from '../../models/legify-radio-group';

@Component({
  selector: 'legify-web-radio-group-form-control',
  templateUrl: './radio-group-form-control.component.html',
  styleUrls: ['./radio-group-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupFormControlComponent),
      multi: true
    }
  ]
})
export class RadioGroupFormControlComponent implements OnInit, ControlValueAccessor {
  @Input() config: LegifyRadioControlGroup;

  public onTouched: () => void = () => {};

  protected formControl: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  get radios(): LegifyFormControl[] {
    return this.config.radios;
  }

  get label(): string {
    return this.config.label;
  }

  get name(): string {
    return this.config.name;
  }

  get control(): FormControl {
    return this.formControl;
  }

  writeValue(obj: any): void {
    if (!obj) {
      return;
    }
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.formControl.disable();
      return;
    }

    this.formControl.enable();
  }
}
