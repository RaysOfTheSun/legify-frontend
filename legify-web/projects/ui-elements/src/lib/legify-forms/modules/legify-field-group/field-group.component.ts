import { Component, Input, Optional } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Field } from './models';

@Component({ template: '' })
export class FieldGroupComponent<F extends Field = Field> {
  @Input() fields: F[];
  @Input() minimalMargins?: boolean;

  constructor(@Optional() public controlContainer: ControlContainer) {}
}
