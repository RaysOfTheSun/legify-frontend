import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SystemEvent } from '../../models/system-event/system-event';

@Injectable()
export class SystemEventService {
  protected readonly eventsSubj = new BehaviorSubject<SystemEvent>(null);

  constructor() {}

  get events$(): Observable<SystemEvent> {
    return this.eventsSubj.asObservable();
  }

  public publish(systemEvent: SystemEvent): void {
    this.eventsSubj.next(systemEvent);
  }
}
