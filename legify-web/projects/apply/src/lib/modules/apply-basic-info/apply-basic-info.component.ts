import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { first } from 'rxjs/operators';
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
  constructor(
    protected matDialog: MatDialog,
    protected applyService: ApplyService,
    protected appConfigService: AppConfigService,
    protected applyBasicInfoService: ApplyBasicInfoService,
    protected applyBasicInfoConfigService: ApplyBasicInfoConfigService
  ) {}

  ngOnInit(): void {}

  public handleClick(): void {
    this.applyService
      .getCurrCustomer()
      .pipe(first())
      .subscribe((customer) => {
        this.matDialog.open<PersonBasicInfoModalComponent, PersonBasicInfoFormModalData>(
          PersonBasicInfoModalComponent,
          {
            data: {
              customer,
              sections: this.applyBasicInfoConfigService.getBasicInfoFormSectionsForRole(
                ConsumerRole.OWNER_AND_INSUDRED
              ),
              componentPropertyMapping: this.applyBasicInfoService.getBasicInfoFormFormGroup(customer)
            },
            ...this.appConfigService.modalConfigs
          }
        );
      });
  }
}
