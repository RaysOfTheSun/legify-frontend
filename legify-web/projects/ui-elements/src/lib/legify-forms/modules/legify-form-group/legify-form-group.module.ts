import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {
  NameInfoFormGroupComponent,
  IdentificationInfoFormGroupComponent,
  HabitsInfoFormGroupComponent,
  FormGroupComponent
} from './components';
import { BirthInfoFormGroupComponent } from './components/birth-info-form-group/birth-info-form-group.component';
import { FormGroupSectionComponent } from './components/form-group-section/form-group-section.component';
import { LegifyRadioGroupModule } from '../legify-radio-group';
import { FormGroupFormDirective } from './directives/form-group-form/form-group-form.directive';

@NgModule({
  declarations: [
    NameInfoFormGroupComponent,
    IdentificationInfoFormGroupComponent,
    HabitsInfoFormGroupComponent,
    FormGroupComponent,
    BirthInfoFormGroupComponent,
    FormGroupSectionComponent,
    FormGroupFormDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    LegifyRadioGroupModule
  ],
  exports: [
    NameInfoFormGroupComponent,
    IdentificationInfoFormGroupComponent,
    HabitsInfoFormGroupComponent,
    BirthInfoFormGroupComponent,
    FormGroupSectionComponent,
    FormGroupFormDirective
  ]
})
export class LegifyFormGroupModule {}
