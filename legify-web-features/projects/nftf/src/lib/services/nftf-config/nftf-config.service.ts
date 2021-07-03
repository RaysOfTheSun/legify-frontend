import { Injectable } from '@angular/core';
import {
  AppConfigService,
  FeatureConfig,
  LEGIFY_FEATURE
} from '@legify/web-core';

@Injectable()
export class NftfConfigService {
  constructor(protected appConfigService: AppConfigService) {}

  get featureConfig(): FeatureConfig {
    return this.appConfigService.getFeatureConfig(LEGIFY_FEATURE.NFTF);
  }

  get isFeatureEnabled(): boolean {
    return this.featureConfig.enabled;
  }
}
