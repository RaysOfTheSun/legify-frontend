import { Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';

export class LegifyFormControl implements ControlValueAccessor {
  protected controlValue: any;
  protected onChangeHandler: (newValue: any) => void;
  protected onTouchedHandler: () => void;

  constructor(@Optional() @Self() protected ngControl: NgControl) {
    if (!this.ngControl) {
      return;
    }

    this.ngControl.valueAccessor = this;
  }

  get formControl(): AbstractControl {
    return this.ngControl.control;
  }

  setValue(newValue: any): void {
    this.controlValue = newValue;
    this.onChangeHandler(this.controlValue);
  }

  writeValue(newValue: any): void {
    this.controlValue = newValue;
  }

  registerOnChange(onChangeHandler: any): void {
    this.onChangeHandler = onChangeHandler;
  }

  registerOnTouched(onTouchedHandler: any): void {
    this.onTouchedHandler = onTouchedHandler;
  }
}
