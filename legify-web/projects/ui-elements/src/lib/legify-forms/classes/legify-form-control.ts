import { Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export class LegifyFormControl<V = any> implements ControlValueAccessor {
  protected control: FormControl = new FormControl();
  protected defaultValue: V;
  protected valueChangesSub: Subscription;

  protected handleOnTouched: () => void;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get formControl(): AbstractControl {
    return this.ngControl.control;
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(onChangeHanlder: any): void {
    this.valueChangesSub = this.control.valueChanges.subscribe(onChangeHanlder);
  }
  registerOnTouched(onTouchedHandler: any): void {
    this.handleOnTouched = onTouchedHandler;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
      return;
    }

    this.control.enable();
  }

  destoryLegifyFormControl(): void {
    if (this.valueChangesSub) {
      this.valueChangesSub.unsubscribe();
    }
  }
}
