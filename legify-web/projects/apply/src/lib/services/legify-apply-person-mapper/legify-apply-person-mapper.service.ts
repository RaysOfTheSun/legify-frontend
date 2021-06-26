import { Injectable } from '@angular/core';
import { Person } from '../../models';

@Injectable()
export class LegifyApplyPersonMapperService {
  constructor() {}

  public getPersonName(person: Person, fullName = false): string {
    if (!person || !person.personalInfo) {
      return '';
    }

    const { first, last, middle } = person.personalInfo.nameInfo;

    return fullName ? `${first} ${middle} ${last}` : `${first} ${last}`;
  }
}
