/* eslint-disable prettier/prettier */
import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import * as countriesActions from '../../ngrx/country-list/country-list.actions';
import {Observable, switchMap} from 'rxjs';
import {CountriesService} from 'src/app/country-list/services/country-list.service';

@Injectable()
export class CountryListEffects {
  constructor(
    private api: CountriesService,
    private actions$: Actions
  ) {}

  loadAllCountries$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        countriesActions.countryListComponentInitialized,
        countriesActions.loadAllRequested),
      mergeMap(() =>
        this.api
          .getCountries()
          .pipe(map(res => countriesActions.loadAllSucceeded({countries: res})))
      )
    )
  );
}
