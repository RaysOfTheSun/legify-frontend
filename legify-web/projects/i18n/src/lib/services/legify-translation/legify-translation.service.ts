import { Injectable } from '@angular/core';
import { L10nTranslationService } from 'angular-l10n';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';
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
  ) {}

  public loadTranslationData(pathToTranslationData: string): Observable<Record<string, string>[]> {
    return this.i18nHttpDataService.getTranslationData(pathToTranslationData).pipe(
      concatMap((translationMap) => this.registerTranslationData(translationMap)),
      catchError(() => of(null))
    );
  }

  protected registerTranslationDataForLocale(
    localeLanguageKey: LOCALE_LANGUAGE_KEY,
    translationMap: LegifyTranslationMap
  ): Observable<Record<string, string>> {
    const localeForLanguage = this.legifyI18nConfigService.localeMap.get(localeLanguageKey);
    return new Observable<Record<string, string>>((subscriber) => {
      const translationMappings = this.legifyTranslationDataService.buildTranslationDataFromMap(
        translationMap,
        localeLanguageKey
      );

      this.translationService.addData(translationMappings, localeForLanguage);
      subscriber.next(translationMappings);
      subscriber.complete();
    });
  }

  protected registerTranslationData(translationMap: LegifyTranslationMap): Observable<Record<string, string>[]> {
    const localRegistrations$ = this.legifyI18nConfigService.languageKeys.map((languageKey) =>
      this.registerTranslationDataForLocale(languageKey as LOCALE_LANGUAGE_KEY, translationMap)
    );

    return forkJoin(localRegistrations$);
  }

  public translate<P = Record<string, string>>(textId: string, translationProps?: P): string {
    return translationProps
      ? this.translationService.translate(textId, translationProps)
      : this.translationService.translate(textId);
  }
}
