import { SystemEvent } from '../system-event';

export class ApplicationSelected extends SystemEvent {
  private applicationId: string;

  constructor(applicationId: string) {
    super();
    this.applicationId = applicationId;
  }

  get selectedApplicationId(): string {
    return this.applicationId;
  }
}
