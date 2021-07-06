import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
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
    const pathToTranslationData = route.data.translationDataPath;

    return this.translationService
      .loadTranslationData(pathToTranslationData)
      .pipe(map((translationData) => !!translationData));
  }
}
