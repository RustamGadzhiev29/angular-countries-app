import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ICountry} from '../../models/country.models';
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
  public countryListComponentViewModel$ = this.store.select(selectCountryListComponentViewModel);
  // public isLoading$: Observable<any> = this.store.select(selectCountryListComponentViewModel);
  // countries$?: Observable<ICountry[]>;
  // loading$?: Observable<boolean>;
  // error$?: Observable<string | null>;
  // page!: number;
  // itemsPerPage = 5;
  constructor(
    // private countriesService: CountriesService,
    // private countryListStoreService: CountryListStoreService,
    private store: Store<{countryList: CountryListState}>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(actions.countryListComponentInitialized());
    this.countryListComponentViewModel$.subscribe(data => {
      console.log(data);
    });
    // this.countries$ = this.countryListStoreService.countries$;
    // this.loading$ = this.store.select(state => state.countryList.loading);
    // this.error$ = this.store.select(state => state.countryList.error);
    // this.countriesService.getCountries();
  }
}

// import {Component, OnInit} from '@angular/core';
// import {CountriesService} from '../../services/country-list-service.service';
// import {Observable} from 'rxjs';
// import {ICountry} from '../../models/country.models';

// @Component({
//   selector: 'app-country-list',
//   templateUrl: './country-list.component.html',
//   styleUrls: ['./country-list.component.scss'],
// })
// export class CountryListComponent implements OnInit {
//   countries$?: Observable<ICountry[]>;
//   constructor(private countriesService: CountriesService) {}
//   ngOnInit(): void {
//     this.countries$ = this.countriesService.countries$;
//     this.countriesService.getCountries();
//   }
// }
