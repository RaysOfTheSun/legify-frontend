import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  template: ''
})
export class FormGroupComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
