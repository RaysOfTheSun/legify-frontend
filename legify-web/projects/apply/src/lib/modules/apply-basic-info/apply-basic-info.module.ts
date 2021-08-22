import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyBasicInfoRoutingModule } from './apply-basic-info-routing.module';
import { ApplyBasicInfoComponent } from './apply-basic-info.component';
import { LegifyFormsModule, LegifyModalModule, LegifyLazyRendererModule } from '@legify/web-ui-elements';
import { PersonBasicInfoModalComponent } from './components/person-basic-info-modal/person-basic-info-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BASIC_INFO_FORM_SECTIONS } from './constants/injection-tokens';
import { BASIC_INFO_FORM_SECTIONS_MAP } from './constants/form-section-maps/basic-info-form-sections-map';
import { PersonalInfoFormGroupSectionComponent } from './components/personal-info-form-group-section/personal-info-form-group-section.component';
import { ApplyBasicInfoConfigService, ApplyBasicInfoService } from './services';
import {
  LegifyTaskCardCollectionModule,
  LegifyTaskCardModule,
  LegifyFileUploaderModule,
  LegifyFormGroupModule
} from '@legify/web-ui-elements';
import { IdentificationInfoFormGroupSectionComponent } from './components/identification-info-form-group-section/identification-info-form-group-section.component';

@NgModule({
  declarations: [
    ApplyBasicInfoComponent,
    PersonBasicInfoModalComponent,
    PersonalInfoFormGroupSectionComponent,
    IdentificationInfoFormGroupSectionComponent
  ],
  imports: [
    CommonModule,
    ApplyBasicInfoRoutingModule,
    MatFormFieldModule,
    LegifyFormsModule,
    ReactiveFormsModule,
    LegifyModalModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressBarModule,
    LegifyLazyRendererModule,
    LegifyTaskCardModule,
    LegifyTaskCardCollectionModule,
    LegifyFileUploaderModule
  ],
  providers: [
    {
      provide: BASIC_INFO_FORM_SECTIONS,
      useValue: BASIC_INFO_FORM_SECTIONS_MAP
    },
    ApplyBasicInfoService,
    ApplyBasicInfoConfigService
  ]
})
export class ApplyBasicInfoModule {}
