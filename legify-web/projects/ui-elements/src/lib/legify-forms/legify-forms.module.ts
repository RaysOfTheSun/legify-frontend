import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSectionComponent } from './components/form-section/form-section.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { MatIconModule } from '@angular/material/icon';
import { LegifyFormGroupModule } from './modules';

@NgModule({
  declarations: [FormSectionComponent, FormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    LegifyFormGroupModule
  ],
  exports: [FormSectionComponent, FormComponent, LegifyFormGroupModule]
})
export class LegifyFormsModule {}
