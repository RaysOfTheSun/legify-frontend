import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { Person } from '../../models';
import { Observable } from 'rxjs';
import { ConsumerRole } from '../../constants';
import { ApplyService } from '../../services';
import { PersonBasicInfoModalComponent } from './components';
import { PersonBasicInfoFormModalData } from './models';
import { ApplyBasicInfoConfigService, ApplyBasicInfoService } from './services';

@Component({
  selector: 'legify-web-apply-basic-info',
  templateUrl: './apply-basic-info.component.html',
  styleUrls: ['./apply-basic-info.component.scss']
})
export class ApplyBasicInfoComponent implements OnInit {
  @Input() taskCardTemplate: TemplateRef<any>;

  constructor(
    protected matDialog: MatDialog,
    protected appConfigService: AppConfigService,
    protected applyBasicInfoService: ApplyBasicInfoService,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService
  ) {}

  public getTaskCardCollectionDataSource(): Observable<Person[]> {
    return this.applyBasicInfoService.getPersonsThatNeedBasicInfo();
  }

  public handleTaskCardClick(consumer: Person): void {
    this.matDialog.open<PersonBasicInfoModalComponent, PersonBasicInfoFormModalData>(PersonBasicInfoModalComponent, {
      data: {
        customer: consumer,
        subforms: this.applyBasicInfoConfigService.getBasicInfoFormSectionsForRole(ConsumerRole.OWNER_AND_INSUDRED),
        formGroup: this.applyBasicInfoService.getBasicInfoFormFormGroup(consumer)
      },
      ...this.appConfigService.modalConfigs
    });
  }

  ngOnInit(): void {}
}
