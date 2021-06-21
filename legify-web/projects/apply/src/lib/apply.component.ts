import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, ApplyShellSidenavItem } from '@legify/web-core';
import { LegifyApplyService } from './services/legify-apply/legify-apply.service';

@Component({
  selector: 'legify-web-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor(protected legifyApplyService: LegifyApplyService) {}

  ngOnInit(): void {}

  public getCurrCustomer(): Observable<Person> {
    return this.legifyApplyService.getCurrCustomer();
  }
}
