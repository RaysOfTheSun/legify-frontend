import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Person,
  ApplyShellSidenavItem,
  TaskCardConfig
} from '@legify/web-core';
import { LegifyApplyService } from './services/legify-apply/legify-apply.service';
import { TaskCardField, COLOR } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor(protected legifyApplyService: LegifyApplyService) {}

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
