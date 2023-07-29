/* eslint-disable prettier/prettier */
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CountryListState, countryListNode} from './country-list.reducer';

export const getListState = createFeatureSelector<CountryListState>(countryListNode);

export const selectContryList = createSelector(
  getListState,
  (state: CountryListState) => state.countries
);
export const selectCountryListIsLoading = createSelector(getListState, state => state.isLoading);
export const selectCountryListCurrentPage = createSelector(getListState, state => state.currentPage);

export const selectCountryListComponentViewModel = createSelector(
  selectContryList,
  selectCountryListIsLoading,
  selectCountryListCurrentPage,
  (countries, isLoading, currentPage) => ({
    countries,
    isLoading,
    currentPage
  })
);

// // Создадим селектор для выборки текущей страницы
// export const selectCurrentPage = createSelector(
//   createFeatureSelector<CountryListState>(countryListNode),
//   (state: CountryListState) => state.currentPage
// );

// // Обновим селектор selectContryList с учетом текущей страницы
// export const selectContryList = createSelector(
//   createFeatureSelector<CountryListState>(countryListNode),
//   selectCurrentPage, // Подключим селектор текущей страницы
//   (state: CountryListState, currentPage: number): any => {
//     const startIndex = (currentPage - 1) * PAGE_SIZE; // Предположим, что у нас есть константа PAGE_SIZE, указывающая количество элементов на странице
//     const endIndex = startIndex + PAGE_SIZE;

//     return state.countries.slice(startIndex, endIndex); // Возвращаем только данные текущей страницы
//   }
// );
