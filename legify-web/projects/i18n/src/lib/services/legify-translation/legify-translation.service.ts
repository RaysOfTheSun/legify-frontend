import { Injectable } from '@angular/core';
import { L10nLocale, L10nTranslationService } from 'angular-l10n';
import { forkJoin, interval, Observable, of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';
import { LOCALE_LANGUAGE_KEY } from '../../constants';
import { LegifyTranslationMap } from '../../models/legify-translation-map';
import { LegifyI18nConfigService } from '../legify-i18n-config/legify-i18n-config.service';
import { LegifyI18nHttpDataService } from '../legify-i18n-http-data/legify-i18n-http-data.service';
import { LegifyTranslationDataBuilderService } from '../legify-translation-data-builder/legify-translation-data-builder.service';

@Injectable()
export class LegifyTranslationService {
  constructor(
    protected translationService: L10nTranslationService,
    protected i18nHttpDataService: LegifyI18nHttpDataService,
    protected legifyI18nConfigService: LegifyI18nConfigService,
    protected legifyTranslationDataService: LegifyTranslationDataBuilderService
  ) {
    interval(5000)
      .pipe(
        tap(() => {
          const locale: L10nLocale =
            this.translationService.getLocale().language === 'vi-VN'
              ? { language: 'en-US' }
              : { language: 'vi-VN' };
          this.translationService.setLocale(locale);
        })
      )
      .subscribe();
  }

  public loadTranslationData(
    pathToTranslationData: string
  ): Observable<Record<string, string>[]> {
    return this.i18nHttpDataService
      .getTranslationData(pathToTranslationData)
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
}
