import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@legify/web-core';
import { LegifyI18nCoreModule, webAppI18nConfigurer, WEB_APP_I18N_CONFIGURER_DEPS } from '@legify/web-i18n';

import { webAppConfigurer, WEB_APP_CONFIGURER_DEPS, AppConfigService } from '@legify/web-core';
import { ApplyDataProvidersModule, APPLY_CONFIG_URL } from '@legify/web-apply';
import { ApplyConfigUrlFactory } from './app-apply/factories/apply-config-url-factory/apply-config-url-factory';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    LegifyI18nCoreModule.forRoot(),
    ApplyDataProvidersModule.forRoot()
  ],
  providers: [
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
    {
      provide: APPLY_CONFIG_URL,
      useFactory: ApplyConfigUrlFactory,
      deps: [AppConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
