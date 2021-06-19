import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplyModule } from '@legify-cor/web-apply';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ApplyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
