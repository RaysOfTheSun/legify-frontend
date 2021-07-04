import { PERSON_ROLE } from '../../constants/person-role-enum';
import { PersonIdentificationInfo } from './person-identification-info';
import { PersonPersonalInfo } from './person-personal-info';

export interface Person {
  id: string;
  role: PERSON_ROLE;
  personalInfo: PersonPersonalInfo;
  identificationInfo: PersonIdentificationInfo;
}
