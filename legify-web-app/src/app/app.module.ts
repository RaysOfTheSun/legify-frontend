import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { legifyWebAppInitializer } from './initializers/app-initalizer';

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
      deps: [Router]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
