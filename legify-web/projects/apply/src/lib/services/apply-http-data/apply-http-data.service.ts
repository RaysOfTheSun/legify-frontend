import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ApplyConfig, LegifyApplication } from '../../models';
import { ApplyConfigService } from '../apply-config/apply-config.service';

@Injectable()
export class ApplyHttpDataService {
  constructor(protected httpClient: HttpClient, protected applyConfigService: ApplyConfigService) {}

  public getLegifyApplication<A = LegifyApplication>(applicationId: string): Observable<A> {
    return this.httpClient.get<A>(applicationId).pipe(take(1));
  }

  public getApplyConfig(): Observable<ApplyConfig> {
    return this.httpClient
      .get<ApplyConfig>(this.applyConfigService.applyConfigUrl)
      .pipe(tap((applyConfig) => this.applyConfigService.updateApplyConfig(applyConfig)));
  }
}
