import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ApplyDocumentsComponent,
  ApplyService,
  ConsumerDataService,
  ApplyDocumentsService,
  ApplyDocumentsConfigService,
  ApplyDocumentsProgessService
} from '@legify/web-apply';
import { AppConfigService } from '@legify/web-core';

@Component({
  selector: 'legify-web-usa-apply-documents',
  templateUrl: './usa-apply-documents.component.html',
  styles: []
})
export class UsaApplyDocumentsComponent extends ApplyDocumentsComponent {
  constructor(
    protected matDialog: MatDialog,
    protected applyService: ApplyService,
    protected appConfigService: AppConfigService,
    protected applyDocumentsService: ApplyDocumentsService,
    protected consumerDataService: ConsumerDataService,
    protected applyDocumentsConfigService: ApplyDocumentsConfigService,
    protected applyDocumentsProgressService: ApplyDocumentsProgessService
  ) {
    super(
      matDialog,
      applyService,
      appConfigService,
      applyDocumentsService,
      applyDocumentsConfigService,
      applyDocumentsProgressService
    );
  }
}
