import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { FieldGroupComponent } from '../../field-group.component';
import { SelectableField } from '../../models';

@Component({
  selector: 'legify-web-radio-field-group',
  templateUrl: './radio-field-group.component.html',
  styleUrls: ['./radio-field-group.component.scss']
})
export class RadioFieldGroupComponent extends FieldGroupComponent<SelectableField> implements OnInit {
  constructor(public controlContainer: ControlContainer) {
    super(controlContainer);
  }

  ngOnInit(): void {}
}
