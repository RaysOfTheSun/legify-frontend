import { Injectable } from '@angular/core';
import { Person } from '@legify/web-core';
import { LegifyApplication } from '../../models';

@Injectable()
export class LegifyApplyDataService {
  constructor() {}

  public getAllPersonsFromApplication(
    application: LegifyApplication
  ): Person[] {
    return [
      application.owner,
      application.insured,
      ...(application.dependents || [])
    ];
  }
}
