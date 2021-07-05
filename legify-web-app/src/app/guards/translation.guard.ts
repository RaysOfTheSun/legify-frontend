import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Resolve
} from '@angular/router';
import { L10nTranslationService } from 'angular-l10n';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationGuard implements Resolve<boolean> {
  constructor(protected translationService: L10nTranslationService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(this.translationService.translate('WELCOME_CAPTION'));
    await this.translationService.loadTranslation([
      {
        name: 'AUTH',
        asset: './assets/i18n/AUTH_LOGIN_COR',
        options: {}
      }
    ]);
    console.log(this.translationService.translate('WELCOME_CAPTION'));
    return true;
  }
}
