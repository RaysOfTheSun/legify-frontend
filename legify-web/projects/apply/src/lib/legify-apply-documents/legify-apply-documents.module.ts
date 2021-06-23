import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegifyApplyDocumentsRoutingModule } from './legify-apply-documents-routing.module';
import { ApplyDocumentsComponent } from './apply-documents.component';
import {
  LegifyTaskCardModule,
  LegifyTaskCardCollectionModule
} from '@legify/web-ui-elements';

@NgModule({
  declarations: [ApplyDocumentsComponent],
  imports: [
    CommonModule,
    LegifyApplyDocumentsRoutingModule,
    LegifyTaskCardModule,
    LegifyTaskCardCollectionModule
  ]
})
export class LegifyApplyDocumentsModule {}
