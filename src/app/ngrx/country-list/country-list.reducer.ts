/* eslint-disable prettier/prettier */
import {createReducer, on, Action, ActionReducer} from '@ngrx/store';
import {ICountry} from 'src/app/country-list/models/country.models';
import * as countriesActions from '../../ngrx/country-list/country-list.actions';
export interface CountryListState {
  countries: ICountry[];
  currentPage: number;
  isLoading: boolean;
  // error: string | null;
}

export const initialState: CountryListState = {
  countries: [],
  isLoading: true,
  // error: null,
  currentPage: 1,
};

export const countryListNode = 'CountryList';

export const countryListReducer = createReducer(
  initialState,
  on(countriesActions.countryListComponentInitialized, state => state),
  on(countriesActions.loadAllRequested, state => ({...state, isLoading: true, error: ''})),
  on(countriesActions.loadAllSucceeded, (state, {countries}) => {
    return {
      ...state,
      countries,
      isLoading: false,
    };
  }),
  on(countriesActions.NextPageAction, state => {
    return {
      ...state,
      loading: false,
      error: null,
      currentPage: state.currentPage + 1,
    };
  }),
  on(countriesActions.PrevPageAction, state => ({
    ...state,
    loading: false,
    error: null,
    currentPage: state.currentPage - 1,
  }))
);
export function reducer(state: CountryListState | undefined, action: Action) {
  return countryListReducer(state, action);
}
