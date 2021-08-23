import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldGroupComponent } from './field-group.component';
import { InputFieldGroupComponent } from './components/input-field-group/input-field-group.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioFieldGroupComponent } from './components/radio-field-group/radio-field-group.component';
import { LegifyFormControlModule } from '../legify-form-control';
import { SelectFieldGroupComponent } from './components/select-field-group/select-field-group.component';

@NgModule({
  declarations: [FieldGroupComponent, InputFieldGroupComponent, RadioFieldGroupComponent, SelectFieldGroupComponent],
  imports: [CommonModule, MatInputModule, LegifyFormControlModule, ReactiveFormsModule],
  exports: [InputFieldGroupComponent, RadioFieldGroupComponent, SelectFieldGroupComponent]
})
export class LegifyFieldGroupModule {}
