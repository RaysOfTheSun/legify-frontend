import { FormSectionData } from '@legify/web-ui-elements';

export interface LazilyRenderedComponentProps<F = any> {
  fieldGroupMap: F;
  formSectionData: FormSectionData;
}
