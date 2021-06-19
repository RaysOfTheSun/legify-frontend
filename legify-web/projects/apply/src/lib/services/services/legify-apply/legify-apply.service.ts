import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '@legify/web-core';

@Injectable()
export class LegifyApplyService {
  constructor() {}

  public getCurrCustomer(): Observable<Person> {
    // TODO: implement an app-context service that will hold information
    // that will be needed globally

    const sampleCustomer: Person = {
      id: 'sample-customer-id',
      personalInformation: {
        age: 23,
        weight: 110,
        height: 123,
        gender: 'male',
        lastName: 'Customer',
        firstName: 'Sample',
        middleName: 'Legify',
        dateOfBirth: new Date().toUTCString()
      }
    };

    return of(sampleCustomer);
  }
}
