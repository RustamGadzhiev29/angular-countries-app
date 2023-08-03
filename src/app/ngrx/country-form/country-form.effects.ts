/* eslint-disable prettier/prettier */
import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as countryActions from '../country-form/country-form.actions';
import {Observable, of, switchMap} from 'rxjs';
import {CountriesService} from 'src/app/country-list/services/country-list.service';

@Injectable()
export class CountryFormEffects {
  constructor(
    private api: CountriesService,
    private actions$: Actions
  ) {}

  loadCountry$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(countryActions.loadCountry),
      mergeMap(action =>
        this.api.getCountry(action.code).pipe(
          map(res => countryActions.loadCountrySucceeded({country: res})),
          catchError(error => of(countryActions.loadCountryFailed({error})))
        )
      )
    )
  );
}
