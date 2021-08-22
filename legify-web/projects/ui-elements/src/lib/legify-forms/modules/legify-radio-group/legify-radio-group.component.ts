import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { LegifyFormControl } from '../legify-form-control';

@Component({
  selector: 'legify-web-legify-radio-group',
  templateUrl: './legify-radio-group.component.html',
  styleUrls: ['./legify-radio-group.component.scss']
})
export class LegifyRadioGroupComponent extends LegifyFormControl implements OnInit {
  @Input() label: string;
  @Input() radioValues: string[];

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit(): void {}
}
