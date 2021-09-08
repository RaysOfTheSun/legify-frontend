import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyShellSidenavItem, ApplyShellConfig } from '@legify/web-ui-elements';
import { ApplyService } from './services';
import { map, withLatestFrom } from 'rxjs/operators';
import { ApplyConfigService } from './modules/apply-data-providers';

@Component({
  selector: 'legify-web-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  constructor(protected applyService: ApplyService, protected applyConfigService: ApplyConfigService) {}

  ngOnInit(): void {}

  get showNftfBanner(): boolean {
    return this.applyService.isNftfEnabledForCurrModule();
  }

  get shellNavItems$(): Observable<ApplyShellSidenavItem[]> {
    return this.applyConfigService.navItems$;
  }

  get shellConfig(): Observable<ApplyShellConfig> {
    return this.applyService.getCurrCustomer().pipe(
      withLatestFrom(this.applyService.getCurrApplication()),
      map(([person, currApplication]) => {
        return {
          dataSource: person,
          currApplicationName: currApplication?.name || '',
          avatarNameValuePath: 'personalInfo.nameInfo.first'
        } as ApplyShellConfig;
      })
    );
  }
}
