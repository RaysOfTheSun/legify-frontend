import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ApplyConfig, LegifyApplication } from '../../models';
import { LegifyApplyConfigService } from '../legify-apply-config/legify-apply-config.service';

@Injectable()
export class LegifyApplyHttpDataService {
  constructor(
    protected httpClient: HttpClient,
    protected applyConfigService: LegifyApplyConfigService
  ) {}

  public getLegifyApplication(
    applicationId: string
  ): Observable<LegifyApplication> {
    return this.httpClient.get<LegifyApplication>(applicationId).pipe(take(1));
  }

  public getApplyConfig(): Observable<ApplyConfig> {
    return this.httpClient
      .get<ApplyConfig>(this.applyConfigService.applyConfigUrl)
      .pipe(
        tap((applyConfig) =>
          this.applyConfigService.updateApplyConfig(applyConfig)
        )
      );
  }
}
