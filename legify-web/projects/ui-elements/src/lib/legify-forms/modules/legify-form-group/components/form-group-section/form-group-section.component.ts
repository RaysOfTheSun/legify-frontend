import { Component, Input, OnInit } from '@angular/core';
import { LegifyFormSectionConfig } from '../../models';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'legify-web-form-group-section',
  template: '',
  styles: []
})
export class FormGroupSectionComponent extends FormGroupComponent implements OnInit {
  @Input() sectionConfig: LegifyFormSectionConfig;
  @Input() hideSectionWrapper: boolean;

  ngOnInit(): void {}
}
