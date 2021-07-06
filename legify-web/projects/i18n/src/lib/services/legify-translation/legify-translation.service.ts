import { Injectable } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';
import { AppConfigService } from '@legify/web-core';
import { forkJoin, interval, Observable } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { LOCALE_LANGUAGE_KEY } from '../../constants';
import { LegifyTranslationMap } from '../../models/legify-translation-map';
import { LegifyI18nConfigService } from '../legify-i18n-config/legify-i18n-config.service';
import { LegifyI18nHttpDataService } from '../legify-i18n-http-data/legify-i18n-http-data.service';
import { LegifyTranslationDataBuilderService } from '../legify-translation-data-builder/legify-translation-data-builder.service';

@Injectable()
export class LegifyTranslationService {
  constructor(
    protected appConfigService: AppConfigService,
    protected translationService: L10nTranslationService,
    protected i18nHttpDataService: LegifyI18nHttpDataService,
    protected legifyI18nConfigService: LegifyI18nConfigService,
    protected legifyTranslationDataService: LegifyTranslationDataBuilderService
  ) {}

  public loadTranslationData(
    pathToTranslationData: string,
    appendCurrAppMarket = true
  ): Observable<Record<string, string>[]> {
    const finalPathToTranslation = appendCurrAppMarket
      ? `${pathToTranslationData}-${this.appConfigService.currMarket.toUpperCase()}`
      : pathToTranslationData;

    return this.i18nHttpDataService
      .getTranslationData(finalPathToTranslation)
      .pipe(
        concatMap((translationMap) =>
          this.registerTranslationData(translationMap)
        )
      );
  }

  protected registerTranslationDataForLocale(
    localeLanguageKey: LOCALE_LANGUAGE_KEY,
    translationMap: LegifyTranslationMap
  ): Observable<Record<string, string>> {
    const localeForLanguage =
      this.legifyI18nConfigService.localeMap.get(localeLanguageKey);
    return new Observable<Record<string, string>>((subscriber) => {
      const translationMappings =
        this.legifyTranslationDataService.buildTranslationDataFromMap(
          translationMap,
          localeLanguageKey
        );

      this.translationService.addData(translationMappings, localeForLanguage);
      subscriber.next(translationMappings);
      subscriber.complete();
    });
  }

  protected registerTranslationData(
    translationMap: LegifyTranslationMap
  ): Observable<Record<string, string>[]> {
    const localRegistrations$ = this.legifyI18nConfigService.languageKeys.map(
      (languageKey) =>
        this.registerTranslationDataForLocale(
          languageKey as LOCALE_LANGUAGE_KEY,
          translationMap
        )
    );

    return forkJoin(localRegistrations$);
  }

  public translate<P = Record<string, string>>(
    textId: string,
    translationProps: P
  ): string {
    return this.translationService.translate(textId, translationProps);
  }
}
