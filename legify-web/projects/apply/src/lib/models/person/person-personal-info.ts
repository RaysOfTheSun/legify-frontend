import { PersonSalutation } from '../../constants';
import { PERSON_GENDER } from '../../constants/person-gender-enum';
import { PersonNameInfo } from './person-name-info';
import { PersonPhysicalInfo } from './person-physical-info';

export interface PersonPersonalInfo {
  age: number;
  gender: PERSON_GENDER;
  nameInfo: PersonNameInfo;
  salutation: PersonSalutation;
  dateOfBirth: string;
  physicalInfo: PersonPhysicalInfo;
}
