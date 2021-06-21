import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Person, ApplyShellSidenavItem } from '@legify/web-core';
import { LegifyApplyConfigService } from '../legify-apply-config/legify-apply-config.service';

@Injectable()
export class LegifyApplyService {
  constructor(protected legifyApplyConfigService: LegifyApplyConfigService) {
    this.legifyApplyConfigService.getApplyConfig().pipe(take(1)).subscribe();
  }

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

  public getNavItems(): Observable<ApplyShellSidenavItem[]> {
    return this.legifyApplyConfigService.getNavItems() || of([]);
  }
}
