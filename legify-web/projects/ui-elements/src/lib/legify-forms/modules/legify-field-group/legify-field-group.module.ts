import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldGroupComponent } from './field-group.component';
import { InputFieldGroupComponent } from './components/input-field-group/input-field-group.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioFieldGroupComponent } from './components/radio-field-group/radio-field-group.component';
import { LegifyFormControlModule } from '../legify-form-control';

@NgModule({
  declarations: [FieldGroupComponent, InputFieldGroupComponent, RadioFieldGroupComponent],
  imports: [CommonModule, MatInputModule, LegifyFormControlModule, ReactiveFormsModule],
  exports: [InputFieldGroupComponent, RadioFieldGroupComponent]
})
export class LegifyFieldGroupModule {}
