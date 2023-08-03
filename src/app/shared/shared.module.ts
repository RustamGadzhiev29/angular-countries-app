import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountryInfoComponent} from './country-info/components/country-info.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [CountryInfoComponent],
  imports: [CommonModule, RouterModule],
  exports: [CountryInfoComponent],
})
export class SharedModule {}
