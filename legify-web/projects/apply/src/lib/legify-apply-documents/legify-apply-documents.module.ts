import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegifyApplyDocumentsRoutingModule } from './legify-apply-documents-routing.module';
import { ApplyDocumentsComponent } from './apply-documents.component';


@NgModule({
  declarations: [ApplyDocumentsComponent],
  imports: [
    CommonModule,
    LegifyApplyDocumentsRoutingModule
  ]
})
export class LegifyApplyDocumentsModule { }
