import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Person,
  ApplyShellSidenavItem,
  TaskCardConfig
} from '@legify/web-core';
import { LegifyApplyService } from './services/legify-apply/legify-apply.service';
import { COLOR, LegifyModalShellComponent } from '@legify/web-ui-elements';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'legify-web-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor(
    protected legifyApplyService: LegifyApplyService,
    protected dialog: MatDialog
  ) {
    const dialogToOpen = LegifyModalShellComponent;
    this.dialog.open(dialogToOpen, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      hasBackdrop: false,
      panelClass: ['legify-modal']
    });
  }

  get taskCardCollectionDataSource(): Observable<any[]> {
    return of([
      this.getCurrCustomer(),
      this.getCurrCustomer(),
      this.getCurrCustomer()
    ]);
  }

  get taskCardRows(): TaskCardConfig[] {
    return [
      {
        headerText: 'Policy Owner',
        footerHeaderText: 'Progression',
        highlightColor: COLOR.GREEN,
        rows: [
          {
            rowHeader: 'Name',
            rowValueSource: 'personalInformation.firstName'
          }
        ],
        showProgressBar: true,
        taskCardClass: ''
      },
      {
        headerText: 'Primary Insured',
        footerHeaderText: 'Progression',
        highlightColor: COLOR.RED,
        rows: [
          {
            rowHeader: 'Name',
            rowValueSource: 'personalInformation.middleName'
          }
        ],
        showProgressBar: true,
        taskCardClass: ''
      }
    ];
  }

  ngOnInit(): void {}

  public getCurrCustomer(): Observable<Person> {
    return this.legifyApplyService.getCurrCustomer();
  }
}
