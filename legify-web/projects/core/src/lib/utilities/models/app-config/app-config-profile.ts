import { LEGIFY_FEATURE } from '../../../constants';
import { LegifyFeatureConfig } from './features/legify-feature-config';

export interface AppConfigProfile {
  features: Record<LEGIFY_FEATURE, LegifyFeatureConfig>;
  endpoints: any;
}
