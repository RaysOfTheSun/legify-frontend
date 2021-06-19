import { Injectable } from '@angular/core';
import { LegifyApplyService } from '@legify/web-apply';
import { Person } from '@legify/web-core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApplyService extends LegifyApplyService {
  constructor() {
    super();
  }

  public getCurrCustomer(): Observable<Person> {
    const corSampleCustomer: Person = {
      id: 'cor-sample-customer',
      personalInformation: {
        firstName: 'Core',
        middleName: 'Sample',
        lastName: 'Customer',
        age: 20,
        dateOfBirth: Date.toString(),
        gender: 'M',
        height: 123,
        weight: 44
      }
    };

    return of(corSampleCustomer);
  }
}
