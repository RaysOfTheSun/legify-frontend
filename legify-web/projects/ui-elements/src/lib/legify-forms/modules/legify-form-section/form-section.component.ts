import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { FormSectionContentDirective } from './directives';

@Component({
  selector: 'legify-web-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  @Input() headerText: string;
  @Input() headerIcon: string;
  @Input() hideHeader?: string;
  @Input() removeMargins?: boolean;
  @Input() contentBackgroundColor?: string;

  @ContentChild(FormSectionContentDirective, { read: TemplateRef })
  public sectionContent: TemplateRef<any>;

  ngOnInit(): void {}
}
