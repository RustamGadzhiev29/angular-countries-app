import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/app/environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ICountriesResponse, ICountry} from '../models/country.models';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  countries$ = new BehaviorSubject<ICountry[]>([]);
  constructor(private http: HttpClient) {}

  getCountries() {
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
      .pipe(map(response => response.data.countries))
      .subscribe(countries => {
        this.countries$.next(countries);
      });
  }
}
