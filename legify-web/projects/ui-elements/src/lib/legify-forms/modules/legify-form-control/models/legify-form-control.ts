import { LegifyFormControlType } from '../constants';

export interface LegifyFormControl {
  type: LegifyFormControlType;
  name?: string;
  label: string;
  disabled?: boolean;
  disableAutoTranslate?: boolean;
}
