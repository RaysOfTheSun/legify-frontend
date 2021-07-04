import { PERSON_ROLE } from '../../../../constants/person-role-enum';
import { LegifyDocumentRequirement } from '../../../document';

export interface LegifyDocumentRequirementConfig
  extends LegifyDocumentRequirement {
  forRoles: PERSON_ROLE[];
}
