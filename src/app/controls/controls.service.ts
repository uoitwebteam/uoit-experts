import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Industry } from '../models';

@Injectable()
export class ControlsService {
	
  private sortControlsSource = new Subject<string>();
  private filterControlsSource = new Subject<Industry[]>();

  sortControls$ = this.sortControlsSource.asObservable();
  filterControls$ = this.filterControlsSource.asObservable();

  sort(sort: string) {
    this.sortControlsSource.next(sort);
  }

  filter(filter: Industry[]) {
    this.filterControlsSource.next(filter);
  }
}
