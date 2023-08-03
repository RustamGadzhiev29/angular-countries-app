import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountryListRoutingModule} from './country-list/country-list-routing.module';
import {CountryFormRoutingModule} from './country-form/country-form-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CountryListModule} from './country-list/country-list.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CountryFormModule} from './country-form/country-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CountryFormRoutingModule,
    // CountryFormModule,
    // CountryListModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
