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
import { marketRouterConfigMap } from './router-configs/market-router-config-map';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule.forRoot()
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
