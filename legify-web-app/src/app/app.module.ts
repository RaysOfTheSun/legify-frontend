import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  SystemModule,
  AppConfigurer,
  appInitializer,
  APP_CONFIGURER_DEPENDENCIES,
  MARKET_ROUTER_CONFIG_MAP
} from '@legify/web-core';
import { marketRouterConfigMap } from './router-configs/market-router-config-map';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SystemModule.forRoot()
  ],
  providers: [
    ...APP_CONFIGURER_DEPENDENCIES,
    {
      provide: MARKET_ROUTER_CONFIG_MAP,
      useValue: marketRouterConfigMap
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [AppConfigurer],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
