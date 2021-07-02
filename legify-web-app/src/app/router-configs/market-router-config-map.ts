import { corRouterConfig } from './cor/cor-routing-config';
import { LEGIFY_MARKET } from '@legify/web-core';
import { usaRoutingConfig } from './usa/usa-routing-config';

export const marketRouterConfigMap = new Map([
  [LEGIFY_MARKET.COR, corRouterConfig],
  [LEGIFY_MARKET.USA, usaRoutingConfig]
]);
