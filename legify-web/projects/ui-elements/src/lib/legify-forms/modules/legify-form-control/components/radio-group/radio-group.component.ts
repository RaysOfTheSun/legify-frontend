import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { OptionGroupComponent } from '../option-group/option-group.component';

@Component({
  selector: 'legify-web-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent extends OptionGroupComponent implements OnInit {
  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }
}
