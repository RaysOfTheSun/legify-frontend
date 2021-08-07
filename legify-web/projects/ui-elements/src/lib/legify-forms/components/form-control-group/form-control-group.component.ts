import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LegifyFormControlConfig, LegifyFormControlGroupConfig } from '../../models';

@Component({
  selector: 'legify-web-form-control-group',
  templateUrl: './form-control-group.component.html',
  styleUrls: ['./form-control-group.component.scss']
})
export class FormControlGroupComponent implements OnInit {
  @Input() configs: LegifyFormControlGroupConfig;

  @Input() group: FormGroup;

  constructor(protected fb: FormBuilder) {}

  get controls(): LegifyFormControlConfig[] {
    return this.configs.controls;
  }

  ngOnInit(): void {}
}
