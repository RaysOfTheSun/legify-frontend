import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FormSectionData } from './models';

@Component({ template: '' })
export class SubformComponent<F = any> implements OnInit {
  @Input() fieldGroupMap: F[];
  @Input() formSectionData: FormSectionData;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
