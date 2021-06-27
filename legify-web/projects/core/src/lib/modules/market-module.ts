import { ModuleWithProviders } from '@angular/core';

export interface MarketModule<M> {
  forMarket(): ModuleWithProviders<M>;
}
