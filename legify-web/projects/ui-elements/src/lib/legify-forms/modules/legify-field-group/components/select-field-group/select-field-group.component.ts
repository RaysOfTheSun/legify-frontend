import { Component, OnInit } from '@angular/core';
import { FieldGroupComponent } from '../../field-group.component';

@Component({
  selector: 'legify-web-select-field-group',
  templateUrl: './select-field-group.component.html',
  styleUrls: ['./select-field-group.component.scss']
})
export class SelectFieldGroupComponent extends FieldGroupComponent implements OnInit {
  ngOnInit(): void {}
}
