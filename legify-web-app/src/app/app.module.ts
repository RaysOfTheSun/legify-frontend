import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { legifyWebAppInitializer } from './modules/core/utilities/app-initializer';
import { IconRegistryConfigurer } from '@legify/web-core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    IconRegistryConfigurer,
    {
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: legifyWebAppInitializer,
      deps: [Router, HttpClient, MatIconRegistry, IconRegistryConfigurer]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
