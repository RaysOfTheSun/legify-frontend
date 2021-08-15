import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {
  NameInfoFormGroupComponent,
  IdentificationInfoFormGroupComponent,
  HabitsInfoFormGroupComponent,
  FormGroupComponent
} from './components';
import { BirthInfoFormGroupComponent } from './components/birth-info-form-group/birth-info-form-group.component';

@NgModule({
  declarations: [
    NameInfoFormGroupComponent,
    IdentificationInfoFormGroupComponent,
    HabitsInfoFormGroupComponent,
    FormGroupComponent,
    BirthInfoFormGroupComponent
  ],
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCheckboxModule, ReactiveFormsModule],
  exports: [
    NameInfoFormGroupComponent,
    IdentificationInfoFormGroupComponent,
    HabitsInfoFormGroupComponent,
    BirthInfoFormGroupComponent
  ]
})
export class LegifyFormGroupModule {}
