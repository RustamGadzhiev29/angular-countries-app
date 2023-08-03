/* eslint-disable prettier/prettier */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState, countryFormNode } from './country-form.reducer';

export const getCountryState = createFeatureSelector<CountryState>(countryFormNode);

export const getCountry = createSelector(getCountryState, (state) => state.country);
export const getLoading = createSelector(getCountryState, (state) => state.isLoading);
export const getError = createSelector(getCountryState, (state) => state.error);

export const selectCountryFormComponentViewModel = createSelector(
  getCountry,
  getLoading,
  getError,
  (country, isLoading, error) => ({
    country,
    isLoading,
    error
  })
);