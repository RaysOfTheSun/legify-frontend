import { Injectable } from '@angular/core';
import { LegifyApplication } from '../../models';
import { Customer } from '../../models/customer/customer';

@Injectable()
export class LegifyApplyDataService {
  constructor() {}

  public getAllInsuredPersonsFromApplication(application: LegifyApplication): Customer[] {
    return [application.owner, application.insured, ...(application.dependents || [])];
  }
}
