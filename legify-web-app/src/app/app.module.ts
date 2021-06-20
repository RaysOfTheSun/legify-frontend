import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { legifyAppInitializer, APPLY_MODULE } from '@legify/web-core';
import { MARKET_ROUTER_CONFIG_MAP } from './router-configs/market-router-config-map';
import { MatIconRegistry } from '@angular/material/icon';
import { Observable } from 'rxjs';

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
        legifyAppInitializer(router, MARKET_ROUTER_CONFIG_MAP, 'auth/login'),
      deps: [Router]
    },
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
        return () => {
          return new Observable((subscriber) => {
            iconRegistry.addSvgIcon(
              'legify-logo',
              sanitizer.bypassSecurityTrustResourceUrl(
                'assets/logos/legify.svg'
              )
            );
            subscriber.next(true);
            subscriber.complete();
          }).toPromise();
        };
      },
      deps: [MatIconRegistry, DomSanitizer]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
