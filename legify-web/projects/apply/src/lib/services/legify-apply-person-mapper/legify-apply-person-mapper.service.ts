import { Injectable } from '@angular/core';
import { Customer, Person } from '../../models';

@Injectable()
export class LegifyApplyPersonMapperService {
  constructor() {}

  public getPersonName(customer: Customer, fullName = false): string {
    if (!customer || !customer.personalInfo) {
      return '';
    }

    const { first, last, middle } = customer.personalInfo.nameInfo;

    return fullName ? `${first} ${middle} ${last}` : `${first} ${last}`;
  }
}
