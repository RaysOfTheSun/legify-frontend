import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import { FormGroupFormDirective } from '../../directives/form-group-form/form-group-form.directive';
import { LegifyFormSectionConfig } from '../../models';
import { FormGroupComponent } from '../form-group/form-group.component';

@Component({
  selector: 'legify-web-form-group-section',
  templateUrl: './form-group-section.component.html',
  styleUrls: ['./form-group-section.component.scss']
})
export class FormGroupSectionComponent extends FormGroupComponent implements AfterContentInit, OnInit {
  @Input() title: string;
  @Input() noMargins: boolean;
  @Input() headerIcon: string;

  @Input() sectionConfig: LegifyFormSectionConfig;
  @Input() hideSectionWrapper: boolean;

  @ContentChild(FormGroupFormDirective, { read: TemplateRef })
  public template: QueryList<TemplateRef<FormGroupFormDirective>>;

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.template);
  }
}
