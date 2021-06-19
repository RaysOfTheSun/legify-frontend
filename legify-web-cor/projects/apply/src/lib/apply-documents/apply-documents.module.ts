import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyDocumentsRoutingModule } from './apply-documents-routing.module';
import { ApplyDocumentsComponent } from './apply-documents.component';
import { LegifyApplyDocumentsModule } from '@legify/web-apply';

@NgModule({
  declarations: [ApplyDocumentsComponent],
  imports: [
    CommonModule,
    ApplyDocumentsRoutingModule,
    LegifyApplyDocumentsModule
  ]
})
export class ApplyDocumentsModule {}
