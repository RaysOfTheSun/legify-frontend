import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ApplyDocumentsComponent,
  LegifyApplyService,
  LegifyApplyDocumentsService,
  LegifyApplyPersonMapperService,
  LegifyApplyDocumentsConfigService,
  LegifyApplyDocumentsProgressService
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
    protected applyService: LegifyApplyService,
    protected appConfigService: AppConfigService,
    protected applyDocumentsService: LegifyApplyDocumentsService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService,
    protected applyDocumentsProgressService: LegifyApplyDocumentsProgressService
  ) {
    super(
      matDialog,
      applyService,
      appConfigService,
      applyDocumentsService,
      applyPersonMapperService,
      applyDocumentsConfigService,
      applyDocumentsProgressService
    );
  }
}
