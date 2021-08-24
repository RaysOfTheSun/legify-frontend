import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { CheckboxGroupComponent } from './components/checkbox-group/checkbox-group.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [RadioGroupComponent, SelectComponent, CheckboxGroupComponent],
  imports: [CommonModule, ReactiveFormsModule, MatRadioModule, MatSelectModule, MatCheckboxModule],
  exports: [RadioGroupComponent, SelectComponent, CheckboxGroupComponent]
})
export class LegifyFormControlModule {}
