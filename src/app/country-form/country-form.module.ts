import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryFormComponent} from './components/country-form/country-form.component';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {countryFormNode, reducer} from '../ngrx/country-form/country-form.reducer';
import {CountryFormEffects} from '../ngrx/country-form/country-form.effects';
import {CountryFormRoutingModule} from './country-form-routing.module';

@NgModule({
  declarations: [CountryFormComponent],
  imports: [
    CommonModule,
    CountryFormRoutingModule,
    SharedModule,
    StoreModule.forFeature(countryFormNode, reducer),
    EffectsModule.forFeature([CountryFormEffects]),
  ],
})
export class CountryFormModule {}
