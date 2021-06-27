import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyDocumentsRoutingModule } from './apply-documents-routing.module';
import { LegifyApplyDocumentsModule } from '@legify/web-apply';
import { ApplyDocumentsComponent } from './apply-documents.component';
import { LegifyUsaTaskCardModule } from '@legify-usa/web-ui-elements';

@NgModule({
  declarations: [ApplyDocumentsComponent],
  imports: [
    CommonModule,
    LegifyUsaTaskCardModule,
    ApplyDocumentsRoutingModule,
    LegifyApplyDocumentsModule
  ],
  exports: [ApplyDocumentsComponent]
})
export class ApplyDocumentsModule {}
