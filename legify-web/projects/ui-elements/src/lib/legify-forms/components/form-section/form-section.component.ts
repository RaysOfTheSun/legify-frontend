import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { FormGroupFormDirective } from '../../modules';

@Component({
  selector: 'legify-web-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements AfterContentInit, OnInit {
  @Input() title: string;
  @Input() noMargins: boolean;
  @Input() headerIcon: string;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {}
}
