import { Injectable } from '@angular/core';
import { L10nLoader } from 'angular-l10n';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LegifyI18nConfigurer {
  constructor(protected l10nLoader: L10nLoader) {}

  public configure(): Observable<boolean> {
    return from(this.l10nLoader.init()).pipe(map(() => true));
  }
}
