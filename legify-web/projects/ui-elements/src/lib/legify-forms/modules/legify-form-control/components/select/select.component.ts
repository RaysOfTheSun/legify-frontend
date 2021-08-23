import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { OptionGroupComponent } from '../option-group/option-group.component';

@Component({
  selector: 'legify-web-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends OptionGroupComponent implements OnInit {
  ngOnInit(): void {}
}
