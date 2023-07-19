import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryFormComponent} from './components/country-form/country-form.component';

const routes: Routes = [{path: 'countryForm', component: CountryFormComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryFormRoutingModule {}
