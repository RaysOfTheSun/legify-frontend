import { AppConfigService } from '@legify/web-core';

export const ApplyConfigUrlFactory = (appConfigService: AppConfigService) => {
  return `assets/configs/${appConfigService.currMarket}-apply-config.json`;
};
