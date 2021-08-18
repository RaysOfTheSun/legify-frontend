import { PersonSalutation } from '../../constants';
import { PersonGender } from '../../constants/consumer/person-gender-enum';
import { PersonNameInfo } from './person-name-info';
import { PersonPhysicalInfo } from './person-physical-info';

export interface PersonPersonalInfo {
  age: number;
  gender: PersonGender;
  nameInfo: PersonNameInfo;
  salutation: PersonSalutation;
  dateOfBirth: string;
  physicalInfo: PersonPhysicalInfo;
}
