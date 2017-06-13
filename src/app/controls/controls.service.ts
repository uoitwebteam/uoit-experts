import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Industry } from '../models';

@Injectable()
export class ControlsService {
	
  private searchControlsSource = new Subject<string>();
  private sortControlsSource = new Subject<string>();
  private filterControlsSource = new Subject<Industry[]>();

  searchControls$ = this.sortControlsSource.asObservable();
  sortControls$ = this.sortControlsSource.asObservable();
  filterControls$ = this.filterControlsSource.asObservable();

  search(search: string) {
    this.searchControlsSource.next(search);
  }

  sort(sort: string) {
    this.sortControlsSource.next(sort);
  }

  filter(filter: Industry[]) {
    this.filterControlsSource.next(filter);
  }
}
