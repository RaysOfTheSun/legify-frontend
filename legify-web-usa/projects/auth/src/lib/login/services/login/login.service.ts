import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LegifyLoginService, LegifyLoginConfigService } from '@legify/web-auth';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SESSION_VARIABLE } from '@legify/web-core';

@Injectable()
export class LoginService extends LegifyLoginService {
  constructor(
    protected legifyLoginConfigService: LegifyLoginConfigService,
    protected router: Router
  ) {
    super(legifyLoginConfigService);
  }

  doLogin(username: string, password: string): Observable<boolean> {
    return of(
      username.endsWith('@legify-us.com') && password.length !== 0
    ).pipe(
      tap((isAuthenticated) => {
        if (isAuthenticated) {
          sessionStorage.setItem(
            SESSION_VARIABLE.APPLICATION_ID,
            'assets/samples/usa-legify-application.json'
          );
          this.router.navigate(['apply']);
        }
      })
    );
  }
}
