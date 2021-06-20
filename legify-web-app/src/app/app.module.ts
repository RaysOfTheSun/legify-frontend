import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { legifyWebAppInitializer } from './modules/core/utilities/app-initializer';

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
      useFactory: legifyWebAppInitializer,
      deps: [Router, HttpClient, DomSanitizer, MatIconRegistry]
    }
    // {
    //   multi: true,
    //   provide: APP_INITIALIZER,
    //   useFactory: (router, location: Location) => {
    //     console.log(window.location.origin);
    //     return legifyAppInitializer(
    //       router,
    //       MARKET_ROUTER_CONFIG_MAP,
    //       'auth/login'
    //     );
    //   },
    //   deps: [Router, Location]
    // },
    // {
    //   multi: true,
    //   provide: APP_INITIALIZER,
    //   useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
    //     return () => {
    //       return new Observable((subscriber) => {
    //         iconRegistry.addSvgIcon(
    //           'legify-logo',
    //           sanitizer.bypassSecurityTrustResourceUrl(
    //             'assets/logos/legify.svg'
    //           )
    //         );
    //         subscriber.next(true);
    //         subscriber.complete();
    //       }).toPromise();
    //     };
    //   },
    //   deps: [MatIconRegistry, DomSanitizer]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
