import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppConfigService } from '@legify/web-core';
import { first } from 'rxjs/operators';
import { ApplyService } from '../../services';
import { PersonBasicInfoModalComponent } from './components';

@Component({
  selector: 'legify-web-apply-basic-info',
  templateUrl: './apply-basic-info.component.html',
  styleUrls: ['./apply-basic-info.component.scss']
})
export class ApplyBasicInfoComponent implements OnInit {
  constructor(
    protected matDialog: MatDialog,
    protected applyService: ApplyService,
    protected appConfigService: AppConfigService
  ) {}

  ngOnInit(): void {}

  public handleClick(): void {
    this.applyService
      .getCurrCustomer()
      .pipe(first())
      .subscribe((customer) => {
        this.matDialog.open(PersonBasicInfoModalComponent, {
          data: {
            customer
          },
          ...this.appConfigService.modalConfigs
        });
      });
  }
}
