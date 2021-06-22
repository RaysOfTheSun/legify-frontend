import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, ApplyShellSidenavItem } from '@legify/web-core';
import { LegifyApplyService } from './services/legify-apply/legify-apply.service';
import { TaskCardField, COLOR } from '@legify/web-ui-elements';

@Component({
  selector: 'legify-web-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  public taskCardFields: TaskCardField[][];

  public taskCardColor = COLOR.RED;

  constructor(protected legifyApplyService: LegifyApplyService) {}

  ngOnInit(): void {
    this.taskCardFields = [
      [
        {
          rowHeader: 'Name',
          rowValueSource: 'personalInformation.firstName'
        }
      ],
      [
        {
          rowHeader: 'Name',
          rowValueSource: 'personalInformation.firstName'
        }
      ],
      [
        {
          rowHeader: 'Name',
          rowValueSource: 'personalInformation.firstName'
        }
      ],
      [
        {
          rowHeader: 'Name',
          rowValueSource: 'personalInformation.firstName'
        }
      ]
    ];
  }

  public getCurrCustomer(): Observable<Person> {
    return this.legifyApplyService.getCurrCustomer();
  }
}
