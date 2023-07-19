import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryListComponent} from './components/country-list/country-list.component';
import {CountryListItemComponent} from './components/country-list-item/country-list-item.component';
import {CountryListFiltersComponent} from './components/country-list-filters/country-list-filters.component';

@NgModule({
  declarations: [CountryListComponent, CountryListItemComponent, CountryListFiltersComponent],
  imports: [CommonModule],
})
export class CountryListModule {}
