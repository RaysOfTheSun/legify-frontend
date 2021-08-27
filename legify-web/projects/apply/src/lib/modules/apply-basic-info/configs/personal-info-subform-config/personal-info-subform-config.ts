import { LazilyRenderedSubformComponent } from 'projects/apply/src/lib/models/config';
import { PersonalInfoSubformComponent } from '../../components';
import { personalInfoSubformFieldGroupMap } from './personal-info-subform-field-group-map';

export const personalInfoSubformConfig: LazilyRenderedSubformComponent = {
  type: PersonalInfoSubformComponent,
  propMapping: {
    fieldGroupMap: personalInfoSubformFieldGroupMap,
    formSectionData: {
      headerIcon: 'perm_identity',
      headerText: 'PERSONAL_INFORMATION_CAPTION'
    }
  }
};
