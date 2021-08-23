import { ConsumerRole } from '../../../../constants';
import { IdentificationInfoSubformComponent, PersonalInfoSubformComponent } from '../../components';

export const BASIC_INFO_FORM_SECTIONS_MAP = new Map([
  [ConsumerRole.OWNER_AND_INSUDRED, [PersonalInfoSubformComponent, IdentificationInfoSubformComponent]]
]);
