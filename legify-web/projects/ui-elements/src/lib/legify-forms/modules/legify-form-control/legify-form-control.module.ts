import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioGroupComponent],
  imports: [CommonModule, ReactiveFormsModule, MatRadioModule],
  exports: [RadioGroupComponent]
})
export class LegifyFormControlModule {}
