import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppEvent } from '../../models';

@Injectable()
export class AppEventService {
  protected readonly eventsSubj = new BehaviorSubject<AppEvent>(null);

  constructor() {}

  get events$(): Observable<AppEvent> {
    return this.eventsSubj.asObservable();
  }

  public publish(appEvent: AppEvent): void {
    this.eventsSubj.next(appEvent);
  }
}
