import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyConfigService, ApplyDataService, ApplyHttpDataService } from './services';
import { ApplyConfigLoaderGuard, ApplyDataLoaderGuard } from './guards';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class ApplyDataProvidersModule {
  public static forRoot(): ModuleWithProviders<ApplyDataProvidersModule> {
    return {
      ngModule: ApplyDataProvidersModule,
      providers: [
        ApplyDataService,
        ApplyConfigService,
        ApplyDataLoaderGuard,
        ApplyHttpDataService,
        ApplyConfigLoaderGuard
      ]
    };
  }
}
