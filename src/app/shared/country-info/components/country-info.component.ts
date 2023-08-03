import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
})
export class CountryInfoComponent {
  @Input() value?: string = {} as string;
  @Input() categoryName?: string = {} as string;
}
