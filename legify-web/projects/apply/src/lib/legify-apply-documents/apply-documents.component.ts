import { Component, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from '../models';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import {
  LegifyApplyDocumentsService,
  LegifyApplyDocumentsConfigService,
  LegifyApplyDocumentsProgressService
} from './services';
import { LegifyApplyPersonMapperService, LegifyApplyService } from '../services';
import { DocumentUploadModalComponent } from './components';
import { AppConfigService } from '@legify/web-core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'legify-web-apply-documents',
  templateUrl: './apply-documents.component.html',
  styleUrls: ['./apply-documents.component.scss']
})
export class ApplyDocumentsComponent {
  @Input() taskCardTemplate: TemplateRef<any>;

  constructor(
    protected matDialog: MatDialog,
    protected applyService: LegifyApplyService,
    protected appConigService: AppConfigService,
    protected applyDocumentsService: LegifyApplyDocumentsService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService,
    protected applyDocumentsProgressService: LegifyApplyDocumentsProgressService
  ) {}

  get taskCardConfigs$(): Observable<TaskCardConfig[]> {
    return this.applyDocumentsService.getTaskCardConfigs();
  }

  public onTaskCardClick(customer: Customer): void {
    this.matDialog.open(DocumentUploadModalComponent, {
      data: {
        customer,
        requiredDocuments: this.applyDocumentsService.getDocumentRequirementsForCustomer(customer)
      },
      ...this.appConigService.modalConfigs
    });
  }

  public getTaskCardCollectionDataSource(): Observable<Customer[]> {
    return this.applyDocumentsService.getAllCustomersThatWillUploadDocuments();
  }

  public getTaskCardProgressBarValue(customer: Customer): Observable<number> {
    return this.applyService.currApplication$.pipe(
      map((application) => this.applyDocumentsProgressService.getProgressChunk(application, customer.id).totalProgress)
    );
  }
}
