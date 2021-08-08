import { LegifyFormControlConfig } from './legify-form-control-config';

export interface LegifyFormControlGroupConfig {
  name: string;
  icon: string;
  title: string;
  controls: LegifyFormControlConfig[][];
}
