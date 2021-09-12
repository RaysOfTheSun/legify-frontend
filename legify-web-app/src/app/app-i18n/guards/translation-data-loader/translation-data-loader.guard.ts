import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { AppConfigService } from '@legify/web-core';
import { LegifyTranslationService } from '@legify/web-i18n';
import { I18N_TRANSLATION_LOADER_CONFIG } from '../../constants/injection-tokens/translation-data-loader-config';
import { TranslationDataLoaderData } from '../../models/translation-data-loader-data';
import { TranslationDataLoaderConfig } from '../../models/translation-data-loader-config';

@Injectable()
export class TranslationDataLoaderGuard implements CanActivate {
  constructor(
    protected appConfigService: AppConfigService,
    protected translationService: LegifyTranslationService,
    @Inject(I18N_TRANSLATION_LOADER_CONFIG) protected translationDataLoaderConfig: TranslationDataLoaderConfig
  ) {}

  canActivate(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<boolean> {
    const translationDataPath = this.getTranslationDataPath(route);
    const fallbackTranslationDataPath = `${translationDataPath}-COR.json`;
    const pathToTranslationDataToLoad = this.translationDataLoaderConfig.alwaysAppendCurrMarket
      ? `${translationDataPath}-${this.appConfigService.currMarket.toUpperCase()}.json`
      : `${translationDataPath}.json`;

    return this.translationService.loadTranslationData(pathToTranslationDataToLoad).pipe(
      concatMap((translationData) => {
        return !!!translationData && this.translationDataLoaderConfig.fallbackToCore
          ? this.translationService.loadTranslationData(fallbackTranslationDataPath)
          : of(translationData);
      }),
      map((translationData) => !!translationData)
    );
  }

  protected getTranslationDataPath(currRoute: ActivatedRouteSnapshot): string {
    const routeData = currRoute.data as TranslationDataLoaderData;

    return `${this.translationDataLoaderConfig.translationDataBasePath}/${routeData.translationDataPath}`;
  }
}
