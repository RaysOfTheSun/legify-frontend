import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplyConfigService } from '../../services';

@Injectable()
export class ApplyConfigLoaderGuard implements CanActivate {
  constructor(protected applyConfigService: ApplyConfigService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.applyConfigService.loadApplyConfig();
  }
}
