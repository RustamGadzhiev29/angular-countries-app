import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryListComponent} from './components/country-list/country-list.component';
import {CountryListItemComponent} from './components/country-list-item/country-list-item.component';
import {CountryListFiltersComponent} from './components/country-list-filters/country-list-filters.component';
import {CountriesService} from './services/country-list.service';
import {CountryListEffects} from '../ngrx/country-list/country-list.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {countryListNode, reducer} from '../ngrx/country-list/country-list.reducer';
import {CountryListPaginationComponent} from './components/country-list-pagination/country-list-pagination.component';
import {SharedModule} from '../shared/shared.module';
import {CountryFormEffects} from '../ngrx/country-form/country-form.effects';
import {CountryListRoutingModule} from './country-list-routing.module';
// import {CountryListPaginationComponent} from './components/country-list-pagination/country-list-pagination.component';

@NgModule({
  declarations: [
    CountryListComponent,
    CountryListItemComponent,
    CountryListPaginationComponent,
    CountryListFiltersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountryListRoutingModule,
    StoreModule.forFeature(countryListNode, reducer),
    EffectsModule.forFeature([CountryListEffects]),
  ],
  providers: [CountriesService, CountryListEffects],
})
export class CountryListModule {}
