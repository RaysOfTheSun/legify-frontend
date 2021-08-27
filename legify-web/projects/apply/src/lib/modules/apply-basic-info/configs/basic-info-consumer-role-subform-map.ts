import { ConsumerRole } from '../../../constants';
import { LazilyRenderedSubformComponent } from '../../../models';

import { contactInfoSubformConfig } from './contact-info-subform-config/contact-info-subform-config';
import { identificationInfoSubformConfig } from './identification-info-subform-config/identification-info-subform-config';
import { personalInfoSubformConfig } from './personal-info-subform-config/personal-info-subform-config';

export const basicInfoFormSubformToConsumerRoleMapping = new Map<ConsumerRole, LazilyRenderedSubformComponent[]>([
  [
    ConsumerRole.OWNER_AND_INSUDRED,
    [personalInfoSubformConfig, identificationInfoSubformConfig, contactInfoSubformConfig]
  ]
]);
