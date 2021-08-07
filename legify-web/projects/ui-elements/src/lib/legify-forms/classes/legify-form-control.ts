import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export class LegifyFormControl<V = any> implements ControlValueAccessor {
  protected control: FormControl = new FormControl();
  protected defaultValue: V;
  protected valueChangesSub: Subscription;

  protected handleOnTouched: () => void;

  get formControl(): FormControl {
    return this.control;
  }

  writeValue(value: any): void {
    this.control.setValue(value ?? this.defaultValue);
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
