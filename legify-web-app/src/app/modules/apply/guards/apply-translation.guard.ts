import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LegifyTranslationService } from '@legify/web-i18n';
import { L10nTranslationService } from 'angular-l10n';

@Injectable({
  providedIn: 'root'
})
export class ApplyTranslationGuard implements CanActivate {
  constructor(
    protected translationService: LegifyTranslationService,
    protected t: L10nTranslationService
  ) {}

  // TODO: develop an easy to use guard for loading translation data
  // in legify/web-i18n
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.translationService
      .loadTranslationData('AUTH_LOGIN_COR')
      .pipe(map((d) => !!d));
  }
}
