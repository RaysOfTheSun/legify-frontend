import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormComponent } from './form.component';
import { FormControlComponent, FormControlGroupComponent, RadioButtonGroupFormControlComponent } from './components';

@NgModule({
  declarations: [FormControlGroupComponent, FormControlComponent, RadioButtonGroupFormControlComponent, FormComponent],
  imports: [CommonModule, MatRadioModule, ReactiveFormsModule],
  exports: [FormComponent, FormControlComponent, FormControlGroupComponent]
})
export class LegifyFormsModule {}
