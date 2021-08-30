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
import { BASIC_INFO_FORM_SUBFORMS } from './constants/injection-tokens';
import { ApplyBasicInfoConfigService, ApplyBasicInfoService } from './services';
import {
  LegifyTaskCardCollectionModule,
  LegifyTaskCardModule,
  LegifyFieldGroupModule,
  LegifyFormSectionModule,
  LegifyFormControlModule,
  LegifyTextListModule
} from '@legify/web-ui-elements';
import { IdentificationInfoSubformComponent } from './components/identification-info-subform/identification-info-subform.component';
import { PersonalInfoSubformComponent } from './components/personal-info-subform/personal-info-subform.component';
import { ContactInfoSubformComponent } from './components/contact-info-subform/contact-info-subform.component';
import { DocumentUploadFormSectionComponent } from './components/document-upload-form-section/document-upload-form-section.component';
import { basicInfoFormSubformToConsumerRoleMapping } from './configs/basic-info-consumer-role-subform-map';
import { LegifyI18nModule } from '@legify/web-i18n';
import { ApplyDocumentUploadModule } from '../apply-document-upload';

@NgModule({
  declarations: [
    ApplyBasicInfoComponent,
    PersonBasicInfoModalComponent,
    IdentificationInfoSubformComponent,
    PersonalInfoSubformComponent,
    ContactInfoSubformComponent,
    DocumentUploadFormSectionComponent
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
    LegifyFieldGroupModule,
    LegifyFormSectionModule,
    LegifyFormControlModule,
    LegifyTextListModule,
    LegifyI18nModule,
    ApplyDocumentUploadModule
  ],
  providers: [
    {
      provide: BASIC_INFO_FORM_SUBFORMS,
      useValue: basicInfoFormSubformToConsumerRoleMapping
    },
    ApplyBasicInfoService,
    ApplyBasicInfoConfigService
  ]
})
export class ApplyBasicInfoModule {}
