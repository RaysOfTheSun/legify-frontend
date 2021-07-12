import { PERSON_ROLE } from '../../constants/person-role-enum';
import { PersonPersonalInfo } from './person-personal-info';

export interface Person {
  id: string;
  role: PERSON_ROLE;
  personalInfo: PersonPersonalInfo;
}
