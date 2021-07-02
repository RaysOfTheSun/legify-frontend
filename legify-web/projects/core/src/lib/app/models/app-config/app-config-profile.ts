import { LEGIFY_FEATURE } from '../../../constants';
import { FeatureConfig } from './features/feature-config';

export interface AppConfigProfile {
  features: Record<LEGIFY_FEATURE, FeatureConfig>;
  endpoints: any;
}
