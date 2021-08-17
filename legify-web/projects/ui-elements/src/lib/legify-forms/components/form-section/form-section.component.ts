import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'legify-web-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  @Input() title: string;
  @Input() headerIcon: string;

  constructor() {}

  ngOnInit(): void {}
}
