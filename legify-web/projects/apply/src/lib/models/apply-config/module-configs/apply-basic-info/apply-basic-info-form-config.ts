import { LegifyFormControlGroupConfig } from '@legify/web-ui-elements';
import { PERSON_ROLE } from '../../../../constants';

export interface ApplyBasicInfoFormConfig {
  forRoles: PERSON_ROLE;
  sections: LegifyFormControlGroupConfig[];
}
