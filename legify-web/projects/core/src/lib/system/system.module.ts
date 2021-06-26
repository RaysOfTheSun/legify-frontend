import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemEventService } from './services';
import { HasSelectedApplicationGuard } from './guards';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class SystemModule {
  public static forRoot(): ModuleWithProviders<SystemModule> {
    return {
      ngModule: SystemModule,
      providers: [SystemEventService, HasSelectedApplicationGuard]
    };
  }
}