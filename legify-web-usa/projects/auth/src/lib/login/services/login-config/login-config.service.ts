import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LegifyLoginConfigService } from '@legify/web-auth';

@Injectable()
export class LoginConfigService extends LegifyLoginConfigService {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  get configUrl(): string {
    return 'assets/configs/usa-login-config.json';
  }
}
