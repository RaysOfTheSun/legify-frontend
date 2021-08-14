import { Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export class LegifyFormControl implements ControlValueAccessor {
  protected handleChange: (value: any) => void;
  protected handleOnTouched: () => void;

  protected controlValue: any;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get formControl(): AbstractControl {
    return this.ngControl.control;
  }

  get value(): any {
    return this.controlValue;
  }

  set value(newValue: any) {
    this.controlValue = newValue;
    this.handleChange(this.controlValue);
  }

  writeValue(value: any): void {
    this.controlValue = value;
  }

  registerOnChange(onChangeHanlder: any): void {
    this.handleChange = onChangeHanlder;
  }

  registerOnTouched(onTouchedHandler: any): void {
    this.handleOnTouched = onTouchedHandler;
  }
}
