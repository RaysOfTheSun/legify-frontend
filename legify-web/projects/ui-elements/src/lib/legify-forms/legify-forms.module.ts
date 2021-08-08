import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormComponent } from './form.component';
import { FormControlComponent, FormControlGroupComponent, RadioButtonGroupFormControlComponent } from './components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FormControlGroupComponent, FormControlComponent, RadioButtonGroupFormControlComponent, FormComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [FormComponent, FormControlComponent, FormControlGroupComponent]
})
export class LegifyFormsModule {}
