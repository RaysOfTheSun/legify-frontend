import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsaApplyDocumentsRoutingModule } from './usa-apply-documents-routing.module';
import { UsaApplyDocumentsComponent } from './usa-apply-documents.component';

import { ApplyDocumentsModule, ApplyDocumentsService } from '@legify/web-apply';
import { LegifyUsaTaskCardModule } from '@legify-usa/web-ui-elements';
import { UsaApplyDocumentsService } from './services/usa-apply-documents/usa-apply-documents.service';

@NgModule({
  declarations: [UsaApplyDocumentsComponent],
  imports: [
    CommonModule,
    LegifyUsaTaskCardModule,
    UsaApplyDocumentsRoutingModule,
    ApplyDocumentsModule
  ],
  providers: [
    { provide: ApplyDocumentsService, useClass: UsaApplyDocumentsService }
  ]
})
export class UsaApplyDocumentsModule {}
