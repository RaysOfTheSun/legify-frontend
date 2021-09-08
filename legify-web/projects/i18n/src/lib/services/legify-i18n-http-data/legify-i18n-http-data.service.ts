import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LegifyTranslationMap } from '../../models';

@Injectable()
export class LegifyI18nHttpDataService {
  constructor(protected httpClient: HttpClient) {}

  // TODO: implement in an http-interceptor in legify/web-core
  protected getRequestParams(): HttpParams {
    const requestParams = new HttpParams();
    return requestParams.set('t', new Date().getMilliseconds().toString());
  }

  public getTranslationData(pathToTranslationData: string): Observable<LegifyTranslationMap> {
    return this.httpClient.get<LegifyTranslationMap>(pathToTranslationData, {
      params: this.getRequestParams()
    });
  }
}
