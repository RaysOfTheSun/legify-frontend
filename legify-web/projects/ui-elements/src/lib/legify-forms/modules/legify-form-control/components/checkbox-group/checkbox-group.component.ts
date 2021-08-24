import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { OptionGroupOption } from '../../models';
import { OptionGroupComponent } from '../option-group/option-group.component';

@Component({
  selector: 'legify-web-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss']
})
export class CheckboxGroupComponent extends OptionGroupComponent implements OnInit {
  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setValue([]);
  }

  public handleCheckboxSelect(option: OptionGroupOption, isChecked: boolean): void {
    const currValue = [...this.controlValue];

    if (!currValue.includes(option.value) && isChecked) {
      currValue.push(option.value);
      this.setValue(currValue);
      return;
    }

    this.setValue([...this.controlValue].filter((value) => value !== option.value));
  }

  public isChecked(option: OptionGroupOption): boolean {
    return (this.controlValue as any[]).includes(option.value);
  }
}
