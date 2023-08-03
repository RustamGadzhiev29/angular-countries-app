/* eslint-disable prettier/prettier */

import {createAction, props} from '@ngrx/store';
import {ICountry} from 'src/app/country-list/models/country.models';

export const loadCountry = createAction(
  '[Country API] Load Country',
  props<{code: string}>()
);

export const loadCountrySucceeded = createAction(
  '[Country] Country Loaded Succeeded',
  props<{ country: ICountry }>()
);
export const loadCountryFailed = createAction(
  '[Country API] Load Failed',
  props<{error: string}>()
);




