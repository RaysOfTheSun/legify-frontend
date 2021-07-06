import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { TranslationLoaderData } from '../../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LegifyTranslationService } from '../../services';

@Injectable()
export class LegifyTranslationLoaderGuard implements CanActivate {
  constructor(protected translationService: LegifyTranslationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<boolean> {
    const translationLoaderData = route.data as TranslationLoaderData;

    return this.translationService
      .loadTranslationData(
        translationLoaderData.translationDataPath,
        translationLoaderData?.customMarket,
        translationLoaderData?.appendCurrMarket
      )
      .pipe(map((translationData) => !!translationData));
  }
}
