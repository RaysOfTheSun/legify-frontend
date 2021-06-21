import { corRouterConfig } from './cor/cor-routing-config';
import { LEGIFY_MARKET } from '@legify/web-core';

export const MARKET_ROUTER_CONFIG_MAP = new Map([
  [LEGIFY_MARKET.COR, corRouterConfig],
  [LEGIFY_MARKET.USA, corRouterConfig]
]);
