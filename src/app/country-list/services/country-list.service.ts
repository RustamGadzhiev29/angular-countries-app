import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ICountriesResponse, ICountry} from '../models/country.models';
import {Store} from '@ngrx/store';
import * as CountryListActions from '../../ngrx/country-list/country-list.actions';
import {CountryListState} from '../../ngrx/country-list/country-list.reducer';
import {environment} from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  // countries$ = this.store.select(state => state.countryList.countries);

  constructor(
    private http: HttpClient // private store: Store<{countryList: CountryListState}>
  ) {}

  getCountries(): Observable<ICountry[]> {
    // this.store.dispatch(CountryListActions.loadCountries());

    const query = `
      {
        countries {
          name
          capital
          currency
          emoji
          phone
          continent {
            name
          }
        }
      }
    `;
    return this.http
      .post<ICountriesResponse>(environment.baseUrl, {query})
      .pipe(map(response => response.data.countries));
  }
}

// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {environment} from 'src/app/environments/environment';
// import {BehaviorSubject, Observable} from 'rxjs';
// import {map} from 'rxjs/operators';
// import {ICountriesResponse, ICountry} from '../models/country.models';

// @Injectable({
//   providedIn: 'root',
// })
// export class CountriesService {
//   countries$ = new BehaviorSubject<ICountry[]>([]);
//   constructor(private http: HttpClient) {}

//   getCountries() {
//     const query = `
//       {
//         countries {
//           name
//           capital
//           currency
//           emoji
//           phone
//           continent {
//             name
//           }
//         }
//       }
//     `;

//     return this.http
//       .post<ICountriesResponse>(environment.baseUrl, {query})
//       .pipe(map(response => response.data.countries))
//       .subscribe(countries => {
//         this.countries$.next(countries);
//       });
//   }
// }
