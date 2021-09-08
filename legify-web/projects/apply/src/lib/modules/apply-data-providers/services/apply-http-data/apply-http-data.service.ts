import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { ApplyConfig, LegifyApplication } from '../../../../models';
import { ApplyConfigService } from '../apply-config/apply-config.service';

@Injectable()
export class ApplyHttpDataService {
  constructor(protected httpClient: HttpClient) {}

  public getLegifyApplication<A = LegifyApplication>(applicationId: string): Observable<A> {
    return this.httpClient.get<A>(applicationId).pipe(take(1));
  }
}
