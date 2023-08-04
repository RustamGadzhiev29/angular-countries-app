import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry, ICountryListVewModel} from '../../models/country.models';
import {map} from 'rxjs/operators';
import * as actions from '../../../ngrx/country-list/country-list.actions';
import {Store} from '@ngrx/store';
import {CountriesService} from '../../services/country-list.service';
import {CountryListState} from 'src/app/ngrx/country-list/country-list.reducer';
import {
  selectContryList,
  selectCountryListComponentViewModel,
} from 'src/app/ngrx/country-list/country-list.selector';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent implements OnInit {
  public countryListComponentViewModel$: Observable<ICountryListVewModel> = this.store.select(
    selectCountryListComponentViewModel
  );
  constructor(private store: Store<{countryList: CountryListState}>) {}

  ngOnInit(): void {
    this.countryListComponentViewModel$.pipe(map(data => data.countries)).subscribe(countries => {
      if (!countries || countries.length === 0) {
        this.store.dispatch(actions.countryListComponentInitialized());
      }
    });
  }
}
