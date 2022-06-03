import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env, environment } from '../environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      clientId: environment.clientID,
      redirectUri: environment.redirectUri,
      domain: environment.domain,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
