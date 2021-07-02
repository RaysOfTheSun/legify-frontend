import { AppEvent } from '../app-event';

export class ApplicationSelected extends AppEvent {
  private applicationId: string;

  constructor(applicationId: string) {
    super();
    this.applicationId = applicationId;
  }

  get selectedApplicationId(): string {
    return this.applicationId;
  }
}
