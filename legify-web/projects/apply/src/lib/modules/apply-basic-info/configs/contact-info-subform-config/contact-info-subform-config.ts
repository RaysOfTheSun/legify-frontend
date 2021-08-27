import { LazilyRenderedSubformComponent } from 'projects/apply/src/lib/models/config';
import { ContactInfoSubformComponent } from '../../components';
import { contactInfoSubformFieldGroupMap } from './contact-info-subform-field-group-map';

export const contactInfoSubformConfig: LazilyRenderedSubformComponent = {
  type: ContactInfoSubformComponent,
  propMapping: {
    fieldGroupMap: contactInfoSubformFieldGroupMap,
    formSectionData: {
      headerIcon: 'mail_outline',
      headerText: 'CONTACT_INFORMATION_CAPTION',
      removeMargins: true
    }
  }
};
