/* eslint-disable prettier/prettier */

export interface ICountriesResponse {
  data: {
    countries: ICountry[];
  };
}
export interface ICountryListVewModel {
  isLoading: boolean;
  countries: ICountry[];
  // error: null,
  currentPage: number;
}
export interface ICountry {
  code?: string;
  name?: string;
  capital?: string;
  continent?: IContinent;
  languages?: ILanguage[];
  currency?: string;
  phone?: string;
}

export interface IContinent {
  name: string;
}
export interface ILanguage {
  name?: string;
}
