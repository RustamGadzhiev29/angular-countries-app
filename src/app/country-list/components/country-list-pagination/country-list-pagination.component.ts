import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {CountryListState} from 'src/app/ngrx/country-list/country-list.reducer';
import * as actions from '../../../ngrx/country-list/country-list.actions';

@Component({
  selector: 'app-country-list-pagination',
  templateUrl: './country-list-pagination.component.html',
  styleUrls: ['./country-list-pagination.component.scss'],
})
export class CountryListPaginationComponent {
  @Input() currentPage!: number;
  @Input() countriesLength!: number;

  constructor(private store: Store<CountryListState>) {}

  nextPage() {
    this.store.dispatch(actions.NextPageAction());
  }

  prevPage() {
    this.store.dispatch(actions.PrevPageAction());
  }
  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === Math.ceil(this.countriesLength / 5);
  }
}
