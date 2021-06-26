import { Injectable } from '@angular/core';
import { AuthShellFooterItem } from '@legify/web-ui-elements';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { LegifyLoginConfigService } from '../legify-login-config/legify-login-config.service';

@Injectable()
export class LegifyLoginService {
  constructor(protected legifyLoginConfigService: LegifyLoginConfigService) {
    this.legifyLoginConfigService.getLoginConfig().pipe(take(1)).subscribe();
  }

  public doLogin(username: string, password: string): Observable<boolean> {
    return of(username.endsWith('@legify.com') && password.length !== 0);
  }

  public getFooterItems(): Observable<AuthShellFooterItem[]> {
    return this.legifyLoginConfigService.footerItems$;
  }
}
