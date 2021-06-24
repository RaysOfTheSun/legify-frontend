import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { LegifyApplication } from '../../models';

@Injectable()
export class LegifyApplyHttpDataService {
  constructor(protected httpClient: HttpClient) {}

  public getLegifyApplication(
    applicationId: string
  ): Observable<LegifyApplication> {
    return this.httpClient.get<LegifyApplication>(applicationId).pipe(take(1));
  }

  public trial() {
    console.log('[APPLY] Loading apply');
  }
}
