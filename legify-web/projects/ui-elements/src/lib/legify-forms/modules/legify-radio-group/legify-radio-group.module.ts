import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegifyRadioGroupComponent } from './legify-radio-group.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LegifyRadioGroupComponent],
  imports: [CommonModule, MatRadioModule, ReactiveFormsModule],
  exports: [LegifyRadioGroupComponent]
})
export class LegifyRadioGroupModule {}
