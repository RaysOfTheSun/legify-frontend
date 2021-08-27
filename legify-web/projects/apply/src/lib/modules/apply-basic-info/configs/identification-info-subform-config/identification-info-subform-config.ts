import { LazilyRenderedSubformComponent } from 'projects/apply/src/lib/models/config';
import { IdentificationInfoSubformComponent } from '../../components';
import { identificationInfoSubFormFieldGroupMap } from './identification-info-subform-field-group-map';

export const identificationInfoSubformConfig: LazilyRenderedSubformComponent = {
  type: IdentificationInfoSubformComponent,
  propMapping: {
    fieldGroupMap: identificationInfoSubFormFieldGroupMap,
    formSectionData: {
      headerIcon: 'assignment_ind',
      headerText: 'Identity Document',
      removeMargins: true
    }
  }
};
