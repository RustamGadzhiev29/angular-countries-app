import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from './components/country-list/country-list.component';

const routes: Routes = [{path: '', component: CountryListComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryListRoutingModule {}
