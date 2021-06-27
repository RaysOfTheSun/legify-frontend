import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from '../models';
import { TaskCardConfig } from '@legify/web-ui-elements';
import { Observable } from 'rxjs';
import {
  LegifyApplyDocumentsService,
  LegifyApplyDocumentsConfigService
} from './services';
import { LegifyApplyPersonMapperService } from '../services';
import { DocumentUploadModalComponent } from './components';

@Component({
  selector: 'legify-web-apply-documents',
  templateUrl: './apply-documents.component.html',
  styleUrls: ['./apply-documents.component.scss']
})
export class ApplyDocumentsComponent {
  @Input() taskCardTemplate: TemplateRef<any>;

  constructor(
    protected matDialog: MatDialog,
    protected applyDocumentsService: LegifyApplyDocumentsService,
    protected applyPersonMapperService: LegifyApplyPersonMapperService,
    protected applyDocumentsConfigService: LegifyApplyDocumentsConfigService
  ) {
    console.log(this.taskCardTemplate);
  }

  get taskCardConfigs$(): Observable<TaskCardConfig[]> {
    this.applyDocumentsService.getTaskCardConfigs().subscribe(console.log);
    return this.applyDocumentsService.getTaskCardConfigs();
  }

  public onTaskCardClick(person: Person): void {
    this.matDialog.open(DocumentUploadModalComponent, {
      data: person,
      hasBackdrop: false,
      minHeight: '100vh',
      minWidth: '100vw',
      panelClass: ['legify-modal']
    });
  }

  public getTaskCardCollectionDataSource(): Observable<Person[]> {
    return this.applyDocumentsService.getAllPersonsThatWillUploadDocuments();
  }
}
