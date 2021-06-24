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

  constructor(protected legifyApplyService: LegifyApplyService) {}

  ngOnInit(): void {
    this.legifyApplyService.listenForApplicationSelection();
  }

  public getCurrCustomer(): Observable<Person> {
    return this.legifyApplyService.getCurrCustomer();
  }
}
