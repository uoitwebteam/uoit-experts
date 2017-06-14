import {
	Component,
	OnInit
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ControlsService } from './controls.service';
import { Industry } from '../models';

@Component({
  selector: 'expert-controls',
  template: `<form class="row" [formGroup]="controlsForm">
		<div class="column">
			<expert-filter-controls formControlName="filter" (onFilterChanged)="onFilterChanged($event)"></expert-filter-controls>
		</div>
		<div class="column">
			<expert-search-controls (onSearchChanged)="onSearchChanged($event)"></expert-search-controls>
		</div>
		<div class="column">
			<expert-sort-controls (onSortChanged)="onSortChanged($event)"></expert-sort-controls>
		</div>
		<pre>{{ controlsForm.value | json }}</pre>
	</form>`
})
export class ControlsComponent implements OnInit {

  protected controlsForm = new FormGroup({
		filter: new FormControl(),
		search: new FormControl(),
		sort: new FormControl(),
  });

  constructor(
  	private controlsService: ControlsService
	) { }

  ngOnInit() { }

  onSearchChanged(search: string) {
  	this.controlsService.search(search);
  }

  onSortChanged(sort: string) {
  	this.controlsService.sort(sort);
  }

  onFilterChanged(filter: Industry[]) {
  	this.controlsService.filter(filter);
  }

}
