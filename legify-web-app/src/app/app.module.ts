import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  CoreModule,
  webAppConfigurer,
  MARKET_ROUTER_CONFIG_MAP,
  WEB_APP_CONFIGURER_DEPS
} from '@legify/web-core';
import {
  LegifyI18nModule,
  webAppI18nConfigurer,
  WEB_APP_I18N_CONFIGURER_DEPS
} from '@legify/web-i18n';
import { marketRouterConfigMap } from './router-configs/market-router-config-map';
import { LegifyApplyI18nGuard } from '@legify/web-apply';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    LegifyI18nModule.forRoot()
  ],
  providers: [
    {
      provide: MARKET_ROUTER_CONFIG_MAP,
      useValue: marketRouterConfigMap
    },
    {
      provide: APP_INITIALIZER,
      useFactory: webAppConfigurer,
      deps: WEB_APP_CONFIGURER_DEPS,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: webAppI18nConfigurer,
      deps: WEB_APP_I18N_CONFIGURER_DEPS,
      multi: true
    },
    LegifyApplyI18nGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
