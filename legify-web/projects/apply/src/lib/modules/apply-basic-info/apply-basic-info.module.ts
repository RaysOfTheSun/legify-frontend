import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyBasicInfoRoutingModule } from './apply-basic-info-routing.module';
import { ApplyBasicInfoComponent } from './apply-basic-info.component';
import { LegifyModalModule, LegifyLazyRendererModule } from '@legify/web-ui-elements';
import { PersonBasicInfoModalComponent } from './components/person-basic-info-modal/person-basic-info-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BASIC_INFO_FORM_SECTIONS } from './constants/injection-tokens';
import { BASIC_INFO_FORM_SECTIONS_MAP } from './configs/form-section-maps/basic-info-form-sections-map';
import { ApplyBasicInfoConfigService, ApplyBasicInfoService } from './services';
import {
  LegifyTaskCardCollectionModule,
  LegifyTaskCardModule,
  LegifyFileUploaderModule,
  LegifyFieldGroupModule,
  LegifyFormSectionModule,
  LegifyFormControlModule
} from '@legify/web-ui-elements';
import { IdentificationInfoSubformComponent } from './components/identification-info-subform/identification-info-subform.component';
import { PersonalInfoSubformComponent } from './components/personal-info-subform/personal-info-subform.component';
import {
  IDENTIFICATION_INFO_SUBFORM_CONFIG,
  PERSONAL_INFO_SUBFORM_CONFIG
} from './constants/injection-tokens/subform-config';
import { personalInfoSubFormFields, identificationInfoSubFormConfig } from './configs/sub-form-configs';
import { TranslatableTextModule } from '@legify/web-i18n-elements';

@NgModule({
  declarations: [
    ApplyBasicInfoComponent,
    PersonBasicInfoModalComponent,
    IdentificationInfoSubformComponent,
    PersonalInfoSubformComponent
  ],
  imports: [
    CommonModule,
    ApplyBasicInfoRoutingModule,
    ReactiveFormsModule,
    LegifyModalModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    LegifyLazyRendererModule,
    LegifyTaskCardModule,
    LegifyTaskCardCollectionModule,
    LegifyFileUploaderModule,
    LegifyFieldGroupModule,
    LegifyFormSectionModule,
    TranslatableTextModule,
    LegifyFormControlModule
  ],
  providers: [
    {
      provide: BASIC_INFO_FORM_SECTIONS,
      useValue: BASIC_INFO_FORM_SECTIONS_MAP
    },
    {
      provide: PERSONAL_INFO_SUBFORM_CONFIG,
      useValue: personalInfoSubFormFields
    },
    {
      provide: IDENTIFICATION_INFO_SUBFORM_CONFIG,
      useValue: identificationInfoSubFormConfig
    },
    ApplyBasicInfoService,
    ApplyBasicInfoConfigService
  ]
})
export class ApplyBasicInfoModule {}
