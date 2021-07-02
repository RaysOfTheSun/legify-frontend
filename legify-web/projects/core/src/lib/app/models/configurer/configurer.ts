import { Observable } from 'rxjs';

export interface Configurer<T> {
  configure(...args: any[]): Observable<T>;
}
