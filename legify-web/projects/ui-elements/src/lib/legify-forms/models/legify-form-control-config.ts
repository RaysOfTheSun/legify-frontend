import { LEGIFY_FORM_CONTROL_TYPE, LEGIFY_FORM_CONTROL_VALIDATOR_TYPE } from '../constants';

export interface LegifyFormControlConfig {
  type: LEGIFY_FORM_CONTROL_TYPE;
  name?: string;
  label: string;
  value?: any;
  disabled?: boolean;
  children?: Partial<LegifyFormControlConfig>[];
  inputType?: string;
  validators?: LEGIFY_FORM_CONTROL_VALIDATOR_TYPE[];
  dataBinding?: string;
}
