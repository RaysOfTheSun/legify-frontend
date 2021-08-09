import { LegifyFormControlConfig } from './legify-form-control-config';

export interface LegifyRadioGroupFormControlConfig extends LegifyFormControlConfig {
  radios?: Partial<LegifyFormControlConfig>[];
  isVertical?: boolean;
}
