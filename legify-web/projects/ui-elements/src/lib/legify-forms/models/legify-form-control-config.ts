import { LEGIFY_FORM_CONTROL_TYPE } from '../constants';

export interface LegifyFormControlConfig {
  type: LEGIFY_FORM_CONTROL_TYPE;
  name?: string;
  label: string;
  value?: any;
  children?: Partial<LegifyFormControlConfig>[];
  inputType?: string;
}
