import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LegifyFormFieldConfig } from '../../models';

@Component({
  template: ''
})
export class FormGroupComponent implements OnInit {
  @Input() fields: LegifyFormFieldConfig[];
  @Input() labelText: string;
  @Input() parentFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
