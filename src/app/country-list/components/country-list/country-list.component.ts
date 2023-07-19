import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/country-list-service.service';
import {Observable} from 'rxjs';
import {ICountry} from '../../models/country.models';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countries$?: Observable<ICountry[]>;

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries$ = this.countriesService.countries$;
    this.countriesService.getCountries();
  }
}
