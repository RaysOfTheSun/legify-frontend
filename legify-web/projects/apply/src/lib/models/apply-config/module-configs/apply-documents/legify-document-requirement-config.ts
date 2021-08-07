import { PERSON_ROLE } from '../../../../constants/person-role-enum';
import { LegifyDocumentConfig } from '../../../document';

export interface LegifyDocumentRequirementConfig extends LegifyDocumentConfig {
  forRoles: PERSON_ROLE[];
}
