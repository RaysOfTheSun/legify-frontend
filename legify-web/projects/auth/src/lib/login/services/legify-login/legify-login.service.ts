import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LegifyLoginService {
  constructor() {}

  public doLogin(username: string, password: string): Observable<boolean> {
    return of(username.endsWith('@legify.com') && password.length !== 0);
  }
}
