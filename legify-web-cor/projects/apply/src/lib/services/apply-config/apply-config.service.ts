import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegifyApplyConfigService, ApplyConfig } from '@legify/web-apply';
import { Observable } from 'rxjs';
import { ApplyShellSidenavItem } from '@legify/web-core';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ApplyConfigService extends LegifyApplyConfigService {
  constructor(protected httpClient: HttpClient) {
    super();
  }

  public getApplyConfig(): Observable<ApplyConfig> {
    return this.httpClient
      .get<ApplyConfig>('assets/configs/cor-apply-config.json')
      .pipe(
        tap((applyConfig) => {
          this.applyConfigSubj.next(applyConfig);
        })
      );
  }

  getNavItems(): Observable<ApplyShellSidenavItem[]> {
    return this.applyConfig$.pipe(map((applyConfig) => applyConfig.navItems));
  }
}
