import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyDocumentsRoutingModule } from './apply-documents-routing.module';
import { LegifyApplyDocumentsModule } from '@legify/web-apply';
import { ApplyDocumentsComponent } from './apply-documents.component';

@NgModule({
  declarations: [ApplyDocumentsComponent],
  imports: [
    CommonModule,
    LegifyApplyDocumentsModule,
    ApplyDocumentsRoutingModule
  ],
  exports: [ApplyDocumentsComponent]
})
export class ApplyDocumentsModule {}
