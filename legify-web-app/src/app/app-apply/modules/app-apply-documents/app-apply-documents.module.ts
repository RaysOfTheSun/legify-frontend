import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppApplyDocumentsRoutingModule } from './app-apply-documents-routing.module';
import { ApplyDocumentsServiceFactory } from './factories/apply-documents-service-factory/apply-documents-service-factory';
import {
  ApplyService,
  ConsumerDataService,
  ApplyDocumentsModule,
  ApplyDocumentsService,
  ApplyDocumentsConfigService,
  ApplyDocumentsProgessService,
  ApplyDocumentUploadDataProviderService
} from '@legify/web-apply';
import { AppConfigService } from '@legify/web-core';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppApplyDocumentsRoutingModule, ApplyDocumentsModule],
  providers: [
    {
      provide: ApplyDocumentsService,
      useFactory: ApplyDocumentsServiceFactory,
      deps: [
        AppConfigService,
        ApplyService,
        ConsumerDataService,
        ApplyDocumentsProgessService,
        ApplyDocumentsConfigService,
        ApplyDocumentUploadDataProviderService
      ]
    }
  ]
})
export class AppApplyDocumentsModule {}
