import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LegifyLoginService, LegifyLoginConfigService } from '@legify/web-auth';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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
          this.router.navigate(['apply']);
        }
      })
    );
  }
}
