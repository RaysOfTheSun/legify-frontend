import { InputField, SelectableField } from '@legify/web-ui-elements';

export interface PersonalInfoSubFormConfig {
  titleFields: SelectableField[];
  nameInfoFields: InputField[];
  birthInfoFields: InputField[];
  parentNameInfoFields: InputField[];
}
