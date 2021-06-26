import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthShellFooterItem } from '@legify/web-ui-elements';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DEFAULT_LEGIFY_LOGIN_CONFIG } from '../../constants/configs/default-login-config';
import { LegifyLoginConfig } from '../../models/legify-login-config';

@Injectable()
export class LegifyLoginConfigService {
  protected legifyLoginConfigSubj: BehaviorSubject<LegifyLoginConfig> =
    new BehaviorSubject(DEFAULT_LEGIFY_LOGIN_CONFIG);

  constructor(protected httpClient: HttpClient) {}

  get configUrl(): string {
    return '';
  }

  get loginConfig$(): Observable<LegifyLoginConfig> {
    return this.legifyLoginConfigSubj.asObservable();
  }

  get footerItems$(): Observable<AuthShellFooterItem[]> {
    return this.loginConfig$.pipe(
      map((loginConfig) => loginConfig.footerItems)
    );
  }

  public getLoginConfig(): Observable<LegifyLoginConfig> {
    if (!this.configUrl) {
      return;
    }

    return this.httpClient.get<LegifyLoginConfig>(this.configUrl).pipe(
      catchError(() => of(DEFAULT_LEGIFY_LOGIN_CONFIG)),
      tap((legifyLoginConfig) =>
        this.legifyLoginConfigSubj.next(legifyLoginConfig)
      )
    );
  }
}
