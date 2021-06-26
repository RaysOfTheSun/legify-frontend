import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApplyShellSidenavItem,
  ApplyShellConfig
} from '@legify/web-ui-elements';
import { Person } from './models';
import { LegifyApplyConfigService, LegifyApplyService } from './services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'legify-web-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  constructor(
    protected applyService: LegifyApplyService,
    protected applyConfigService: LegifyApplyConfigService
  ) {}

  ngOnInit(): void {
    this.applyService.getCurrSelectedApplication();
  }

  get shellNavItems$(): Observable<ApplyShellSidenavItem[]> {
    return this.applyConfigService.navItems$;
  }

  get shellConfig(): Observable<ApplyShellConfig> {
    return this.applyService.getCurrCustomer().pipe(
      map((person) => {
        return {
          dataSource: person,
          avatarNameValuePath: 'personalInfo.nameInfo.first'
        } as ApplyShellConfig;
      })
    );
  }
}
