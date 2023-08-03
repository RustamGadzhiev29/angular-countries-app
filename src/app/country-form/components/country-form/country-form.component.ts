import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CountryState} from 'src/app/ngrx/country-form/country-form.reducer';
import * as actions from 'src/app/ngrx/country-form/country-form.actions';
import {ActivatedRoute} from '@angular/router';
import {selectCountryFormComponentViewModel} from 'src/app/ngrx/country-form/country-form.selector';
import {of} from 'rxjs';
import {ILanguage} from 'src/app/country-list/models/country.models';
@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.scss'],
})
export class CountryFormComponent implements OnInit {
  // public countryViewModel$ = of({
  //   name: 'Andorra',
  //   capital: 'Andorra la Vella',
  //   currency: 'EUR',
  //   emoji: '🇦🇩',
  //   phone: '376',
  //   continent: {
  //     name: 'Europe',
  //   },
  // });
  public countryViewModel$ = this.store.select(selectCountryFormComponentViewModel);
  constructor(
    private route: ActivatedRoute,
    // private countriesService: CountriesService,
    // private countryListStoreService: CountryListStoreService,
    private store: Store<{countryForm: CountryState}>
  ) {
    console.log('code');
  }
  ngOnInit(): void {
    const code = this.route.snapshot.params['code'];
    console.log('code', code);
    if (code) {
      this.store.dispatch(actions.loadCountry({code}));
    }
  }
  getLanguagesString(languages: ILanguage[]): string {
    return languages.map(lang => lang.name).join(', ');
  }
}
