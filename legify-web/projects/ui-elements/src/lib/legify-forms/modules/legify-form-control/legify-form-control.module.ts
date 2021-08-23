import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [RadioGroupComponent, SelectComponent],
  imports: [CommonModule, ReactiveFormsModule, MatRadioModule, MatSelectModule],
  exports: [RadioGroupComponent, SelectComponent]
})
export class LegifyFormControlModule {}
