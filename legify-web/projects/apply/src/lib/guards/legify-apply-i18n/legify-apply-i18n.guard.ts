import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { LegifyTranslationService } from '@legify/web-i18n';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LegifyApplyI18nGuard implements CanActivate {
  constructor(protected translationService: LegifyTranslationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.translationService
      .loadTranslationData('apply/APPLY_FIELDS')
      .pipe(map((translations) => !!translations));
  }
}
