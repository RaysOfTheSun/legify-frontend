import { ConsumerRole } from '../../constants';
import { PersonPersonalInfo } from './person-personal-info';

export interface Person {
  id: string;
  role: ConsumerRole;
  personalInfo: PersonPersonalInfo;
}
