import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SESSION_VARIABLE } from '@legify/web-core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplyDataService } from '../../services';

@Injectable()
export class ApplyDataLoaderGuard implements CanActivate {
  constructor(protected applyDataService: ApplyDataService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const currApplicationId = sessionStorage.getItem(SESSION_VARIABLE.APPLICATION_ID);
    return this.applyDataService.getApplicationById(currApplicationId).pipe(
      tap((application) => this.applyDataService.setCurrApplication(application)),
      map((application) => !!application)
    );
  }
}
