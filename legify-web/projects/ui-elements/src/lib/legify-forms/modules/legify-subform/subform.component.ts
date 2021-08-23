import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { SubformConfig } from './models';

@Component({ template: '' })
export class SubformComponent implements OnInit {
  @Input() config: SubformConfig;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}
}
