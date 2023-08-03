/* eslint-disable prettier/prettier */

import {createAction, props} from '@ngrx/store';
import {ICountry} from 'src/app/country-list/models/country.models';

export const loadAllSucceeded = createAction(
  '[CountryList API] Load All Succeeded',
  props<{countries: ICountry[]}>()
);

export const loadAllFailed = createAction(
  '[CountryList API] Load All Failed',
  props<{error: string}>()
);

export const countryListComponentInitialized = createAction('[CountryList Component] Initialized');

export const loadAllRequested = createAction('[CountryList Component] Load All Requested');
export const PrevPageAction = createAction('[CountryList Component] prevPage');
export const NextPageAction = createAction('[CountryList Component] nextPage');


