import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { LegifyFormControl } from '../../classes';
import { Option, OptionGroupOption } from '../../models';

@Component({ template: `` })
export class OptionGroupComponent<O extends OptionGroupOption = OptionGroupOption>
  extends LegifyFormControl
  implements OnInit
{
  @Input() options: O[];
  @Input() groupLabel: string;

  public uniqueRows: number[];

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit(): void {
    this.uniqueRows = [...new Set(this.options.map((field) => field.row))];
  }

  public getFieldsForRow(rowNumber: number): O[] {
    return this.options.filter((option) => option.row === rowNumber);
  }
}
