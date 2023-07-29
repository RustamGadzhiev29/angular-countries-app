/* eslint-disable prettier/prettier */

import {Action, createAction, props} from '@ngrx/store';
import {ICountry} from 'src/app/country-list/models/country.models';
import {type} from '../util';

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

// export const ActionTypes = {
//   LOAD: type('[Country List] -LOAD Requested-'),
//   LOAD_COMPLETED: type('[Country List] -LOAD Completed-'),
//   LOAD_ERROR: type('[Country List] -LOAD Error-'),

// };

// export class CountryPayload {
//   constructor(public country: ICountry) { }
// }

// export class CountriesPayload {
//   constructor(public countries: ICountry[]) { }
// }

// export class LoadAction implements Action {
//   type = ActionTypes.LOAD;

//   constructor(public payload: any = null) { }
// }

// export class LoadCompletedAction implements Action {
//   type = ActionTypes.LOAD_COMPLETED;

//   constructor(public payload: CountriesPayload) { }
// }

// export type CountriesAction
//     = LoadAction
//     | LoadCompletedAction

// export const loadCountriesSuccess = createAction(
//   '[Country List] Load Countries Success',
//   props<{countries: ICountry[]}>()
// );
// export const loadCountriesFailure = createAction(
//   '[Country List] Load Countries Failure',
//   props<{error: string}>()
// );

// import {Action} from '@ngrx/store';
// export enum CountryListActionsType {
//   getList = '[COUNTRY LIST] getList',
//   prevPage = '[COUNTRY LIST] prevPage',
//   nextPage = '[COUNTRY LIST] nextPage',
// }

// export class GetListAction implements Action {
//   readonly type = CountryListActionsType.getList;
//   constructor(public query:string) {}
// }

// export class PrevPageAction implements Action {
//   readonly type = CountryListActionsType.prevPage;
// }

// export class NextPageAction implements Action {
//   readonly type = CountryListActionsType.nextPage;
// }

// export type CountryListActions =
//   | GetListAction
//   | PrevPageAction
//   | NextPageAction
