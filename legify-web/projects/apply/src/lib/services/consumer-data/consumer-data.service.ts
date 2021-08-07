import { Injectable } from '@angular/core';
import { LegifyApplication } from '../../models';
import { Customer } from '../../models/customer/customer';
@Injectable()
export class ConsumerDataService {
  constructor() {}

  public getAllInsuredPersonsFromApplication(application: LegifyApplication): Customer[] {
    return [application.owner, application.insured, ...(application.dependents || [])];
  }

  public getConsumerName(customer: Customer, fullName = false): string {
    if (!customer || !customer.personalInfo) {
      return '';
    }

    const { first, last, middle } = customer.personalInfo.nameInfo;

    return fullName ? `${first} ${middle} ${last}` : `${first} ${last}`;
  }
}
