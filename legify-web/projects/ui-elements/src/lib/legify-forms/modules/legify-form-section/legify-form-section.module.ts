import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSectionComponent } from './form-section.component';
import { MatIconModule } from '@angular/material/icon';
import { FormSectionContentDirective } from './directives';

@NgModule({
  declarations: [FormSectionComponent, FormSectionContentDirective],
  imports: [CommonModule, MatIconModule],
  exports: [FormSectionContentDirective, FormSectionComponent]
})
export class LegifyFormSectionModule {}
