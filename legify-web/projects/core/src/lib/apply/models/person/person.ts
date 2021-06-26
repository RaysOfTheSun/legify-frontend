import { PERSON_ROLE } from 'projects/apply/src/lib/constants/person-role-enum';
import { PersonPersonalInformation } from './person-personal-information';

export interface Person {
  id: string;
  role: PERSON_ROLE;
  personalInformation: PersonPersonalInformation;
}
