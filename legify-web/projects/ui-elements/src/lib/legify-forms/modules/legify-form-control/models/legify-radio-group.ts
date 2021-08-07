import { LegifyFormControl } from './legify-form-control';
import { LegifyRadioFormControl } from './legify-radio-form-control';

export interface LegifyRadioControlGroup extends LegifyFormControl {
  radios: LegifyRadioFormControl[];
  orientation?: string;
}
