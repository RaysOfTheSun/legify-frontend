import { Injectable } from '@angular/core';
import { InsuredPerson, LegifyApplication } from '../../models';

@Injectable()
export class LegifyApplyDataService {
  constructor() {}

  public getAllInsuredPersonsFromApplication(
    application: LegifyApplication
  ): InsuredPerson[] {
    return [
      application.owner,
      application.insured,
      ...(application.dependents || [])
    ];
  }
}
