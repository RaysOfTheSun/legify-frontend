import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LegifyLoginService, LegifyLoginConfigService } from '@legify/web-auth';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService extends LegifyLoginService {
  constructor(
    protected router: Router,
    protected legifyLoginConfigService: LegifyLoginConfigService
  ) {
    super(legifyLoginConfigService);
  }

  doLogin(username: string, password: string): Observable<boolean> {
    return of(
      username.endsWith('@legify-cor.com') && password.length !== 0
    ).pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          return;
        }

        this.router.navigate(['apply']);
      })
    );
  }
}
