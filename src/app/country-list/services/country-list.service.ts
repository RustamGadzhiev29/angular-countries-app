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
    const query = `
      {
        countries {
          name
          capital
          currency
          emoji
          phone
          code
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
  getCountry(code: string): Observable<ICountry> {
    const query = `
      {
        country(code: "${code}") {
          code
          name
          continent {
            name
          }
          capital
          currency
          languages {
            name
          }
          emoji
          emojiU
        }
      }
    `;
    return this.http
      .post<{data: {country: ICountry}}>(environment.baseUrl, {query})
      .pipe(map(response => response.data.country));
  }
}
