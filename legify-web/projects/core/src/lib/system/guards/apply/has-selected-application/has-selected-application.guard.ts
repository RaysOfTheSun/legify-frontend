import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
  CanActivateChild
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SESSION_VARIABLE } from '../../../../constants/app-variables/session-variable-enum';

@Injectable()
export class HasSelectedApplicationGuard
  implements CanActivate, CanActivateChild
{
  constructor(protected router: Router) {}

  protected hasSelectedApplication(): Observable<boolean | UrlTree> {
    return of(sessionStorage.getItem(SESSION_VARIABLE.APPLICATION_ID)).pipe(
      map((applicationId: string) => {
        return !!applicationId || this.router.createUrlTree(['auth', 'login']);
      })
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.hasSelectedApplication();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.hasSelectedApplication();
  }
}
