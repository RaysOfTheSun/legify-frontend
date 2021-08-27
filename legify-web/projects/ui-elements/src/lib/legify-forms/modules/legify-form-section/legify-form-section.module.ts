import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSectionComponent } from './form-section.component';
import { MatIconModule } from '@angular/material/icon';
import { FormSectionContentDirective } from './directives';
import { LegifyI18nModule } from '@legify/web-i18n';

@NgModule({
  declarations: [FormSectionComponent, FormSectionContentDirective],
  imports: [CommonModule, MatIconModule, LegifyI18nModule],
  exports: [FormSectionContentDirective, FormSectionComponent]
})
export class LegifyFormSectionModule {}
