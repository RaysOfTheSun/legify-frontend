import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  NameInfoFormGroupComponent,
  GeneralInfoFormGroupComponent,
  IdentificationInfoFormGroupComponent,
  HabitsInfoFormGroupComponent,
  FormGroupComponent
} from './components';

@NgModule({
  declarations: [
    NameInfoFormGroupComponent,
    GeneralInfoFormGroupComponent,
    IdentificationInfoFormGroupComponent,
    HabitsInfoFormGroupComponent,
    FormGroupComponent
  ],
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
  exports: [
    NameInfoFormGroupComponent,
    GeneralInfoFormGroupComponent,
    IdentificationInfoFormGroupComponent,
    HabitsInfoFormGroupComponent
  ]
})
export class LegifyFormGroupModule {}
