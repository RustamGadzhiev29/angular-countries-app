import {Component, Input, OnInit} from '@angular/core';
import {ICountry} from '../../models/country.models';

@Component({
  selector: 'app-country-list-item',
  templateUrl: './country-list-item.component.html',
  styleUrls: ['./country-list-item.component.scss'],
})
export class CountryListItemComponent implements OnInit {
  @Input() country!: ICountry;

  ngOnInit(): void {
    console.log(this.country);
  }
}
