/* eslint-disable prettier/prettier */
import {createReducer, on, Action, ActionReducer} from '@ngrx/store';
import {ICountry} from 'src/app/country-list/models/country.models';
import * as CountryActions from '../country-form/country-form.actions';
export interface CountryState {
  country: ICountry;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
}

export const initialState: CountryState = {
  country: {},
  isLoading: false,
  error: null,
  currentPage: 1,
};

export const countryFormNode = 'CountryForm';

export const countryFormReducer = createReducer(
  initialState,
  on(CountryActions.loadCountry, state => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(CountryActions.loadCountrySucceeded, (state, {country}) => ({
    ...state,
    country,
    isLoading: false,
  })),
  on(CountryActions.loadCountryFailed, (state, {error}) => ({
    ...state,
    isLoading: false,
    error,
  }))
);

export function reducer(state: CountryState | undefined, action: Action) {
  return countryFormReducer(state, action);
}
