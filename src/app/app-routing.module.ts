// import {NgModule} from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'countries',
    loadChildren: () => import('./country-list/country-list.module').then(m => m.CountryListModule),
  },
  {
    path: 'country/:code',
    loadChildren: () => import('./country-form/country-form.module').then(m => m.CountryFormModule),
  },
  {
    path: '**',
    redirectTo: '/countries',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
