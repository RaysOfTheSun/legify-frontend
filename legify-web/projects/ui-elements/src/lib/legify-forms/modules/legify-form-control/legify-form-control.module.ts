import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { RadioGroupFormControlComponent } from './components/radio-group-form-control/radio-group-form-control.component';

import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormControlComponent, RadioGroupFormControlComponent],
  imports: [CommonModule, MatRadioModule, ReactiveFormsModule],
  exports: [FormControlComponent]
})
export class LegifyFormControlModule {}
