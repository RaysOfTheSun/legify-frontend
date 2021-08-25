import { Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

export class LegifyFormControl implements ControlValueAccessor {
  protected controlValue: any;
  protected onChangeHandler: (newValue: any) => void;
  protected onTouchedHandler: () => void;

  public formControl: FormControl;

  constructor(@Optional() @Self() protected ngControl: NgControl) {
    if (!this.ngControl) {
      return;
    }

    this.ngControl.valueAccessor = this;
    this.formControl = this.ngControl.control as FormControl;
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
