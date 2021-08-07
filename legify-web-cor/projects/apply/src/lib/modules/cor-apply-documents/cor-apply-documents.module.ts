import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorApplyDocumentsRoutingModule } from './cor-apply-documents-routing.module';
import { CorApplyDocumentsComponent } from './cor-apply-documents.component';
import { ApplyDocumentsModule } from '@legify/web-apply';

@NgModule({
  declarations: [CorApplyDocumentsComponent],
  imports: [CommonModule, ApplyDocumentsModule, CorApplyDocumentsRoutingModule]
})
export class CorApplyDocumentsModule {}
