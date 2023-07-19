import {Component, Input} from '@angular/core';
import {ICountriesResponse, ICountry} from '../../models/country.models';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.scss'],
})
export class CountryListItemComponent {
  @Input() country: ICountry = {} as ICountry;
}
