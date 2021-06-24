import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LegifyLoginService, LegifyLoginConfigService } from '@legify/web-auth';
import { SystemEventService, SESSION_VARIABLE } from '@legify/web-core';
import { Observable, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

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
      concatMap((isAuthenticated) => {
        return new Observable<boolean>((subscriber) => {
          subscriber.next(isAuthenticated);

          if (isAuthenticated) {
            sessionStorage.setItem(
              SESSION_VARIABLE.APPLICATION_ID,
              'assets/samples/cor-legify-application.json'
            );
            subscriber.complete();
            this.router.navigate(['apply']);
          }
        });
      })
    );
  }
}
