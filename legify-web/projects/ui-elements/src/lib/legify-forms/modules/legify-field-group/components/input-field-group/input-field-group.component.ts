import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FieldGroupComponent } from '../../field-group.component';
import { InputField } from '../../models';

@Component({
  selector: 'legify-web-input-field-group',
  templateUrl: './input-field-group.component.html',
  styleUrls: ['./input-field-group.component.scss']
})
export class InputFieldGroupComponent extends FieldGroupComponent<InputField> implements OnInit {
  constructor(public controlContainer: ControlContainer) {
    super(controlContainer);
  }

  ngOnInit(): void {}
}
