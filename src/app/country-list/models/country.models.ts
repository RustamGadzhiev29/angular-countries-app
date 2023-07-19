/* eslint-disable prettier/prettier */

export interface ICountriesResponse {
  data: {
    countries: ICountry[];
  };
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
