import { InputField, SelectableField } from '@legify/web-ui-elements';

export interface PersonalInfoSubformFieldGroupMap {
  titleFields: SelectableField[];
  nameInfoFields: InputField[];
  birthInfoFields: InputField[];
  relationshipFields: SelectableField[];
  parentNameInfoFields: InputField[];
}
