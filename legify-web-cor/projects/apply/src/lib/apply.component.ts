import { Component, Input, OnInit } from '@angular/core';
import { ApplyShellSidenavItem } from '@legify/web-core';
import { LegifyApplyService } from '@legify/web-apply';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-apply',
  templateUrl: './apply.component.html',
  styles: []
})
export class ApplyComponent implements OnInit {
  @Input() navItems: ApplyShellSidenavItem[] = [];

  constructor(protected legifyApplyService: LegifyApplyService) {}

  ngOnInit(): void {}

  public getNavItems(): Observable<ApplyShellSidenavItem[]> {
    return this.legifyApplyService.getNavItems();
  }
}
