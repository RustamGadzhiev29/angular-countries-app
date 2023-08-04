import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryInfoComponent} from './country-info/components/country-info.component';
import {RouterModule} from '@angular/router';
import {SpinnerComponent} from './spinner/components/spinner.component';

@NgModule({
  declarations: [CountryInfoComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule],
  exports: [CountryInfoComponent, SpinnerComponent],
})
export class SharedModule {}
