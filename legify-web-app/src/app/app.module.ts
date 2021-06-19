import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { legifyAppInitializer, APPLY_MODULE } from '@legify/web-core';
import { MARKET_ROUTER_CONFIG_MAP } from './router-configs/market-router-config-map';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: (router) =>
        legifyAppInitializer(
          router,
          MARKET_ROUTER_CONFIG_MAP,
          APPLY_MODULE.APPLY
        ),
      deps: [Router]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
