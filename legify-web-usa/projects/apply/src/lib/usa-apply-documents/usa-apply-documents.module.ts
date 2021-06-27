import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsaApplyDocumentsRoutingModule } from './usa-apply-documents-routing.module';
import { UsaApplyDocumentsComponent } from './usa-apply-documents.component';

import { LegifyApplyDocumentsModule } from '@legify/web-apply';
import { LegifyUsaTaskCardModule } from '@legify-usa/web-ui-elements';

@NgModule({
  declarations: [UsaApplyDocumentsComponent],
  imports: [
    CommonModule,
    LegifyUsaTaskCardModule,
    UsaApplyDocumentsRoutingModule,
    LegifyApplyDocumentsModule
  ]
})
export class UsaApplyDocumentsModule {}
