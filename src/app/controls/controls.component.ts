import {
	Component,
	OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
	CompleterService,
	CompleterData,
	CompleterItem,
	CtrCompleter
} from 'ng2-completer';

import { ExpertsService } from '../experts/experts.service';
import { ControlsService } from './controls.service';
import { Industry } from '../models';

@Component({
  selector: 'expert-controls',
  template: `<div class="row">
		<div class="column">
			<!--<expert-filter-controls (onFilterChanged)="onFilterChanged($event)"></expert-filter-controls>-->
			<label>Filter by industry
				<ng2-completer [formControl]="filter"
											 [datasource]="industries"
											 (selected)="onIndustrySelected($event)"
											 minSearchLength="0"
											 clearSelected="true"
											 openOnFocus="true"
											 placeholder="E.g. &ldquo;Accounting&rdquo;">
				</ng2-completer>
			</label>
			<span class="label" *ngFor="let industry of industriesSelected">
				<button (click)="toggleIndustry(industry)">&times;</button> {{ industry.industry_name }}
			</span>
		</div>
		<div class="column">
			<!--<expert-search-controls (onSearchChanged)="onSearchChanged($event)"></expert-search-controls>-->

		</div>
		<div class="column">
			<!--<expert-sort-controls (onSortChanged)="onSortChanged($event)"></expert-sort-controls>-->

		</div>
	</div>`
})
export class ControlsComponent implements OnInit {

  protected industries: CompleterData;
  protected industriesSelected: Industry[] = [];

  errorMessage = null;

	filter = new FormControl();
	search = new FormControl();
	sort = new FormControl();

  constructor(
  	private controlsService: ControlsService,
  	private expertsService: ExpertsService,
  	private completerService: CompleterService
  ) { }

  ngOnInit() {
  	this.getIndustries();
  }

  getIndustries() {
  	this.expertsService.getIndustries()
				.subscribe(
					industries => {
						console.log('Filters returned:', industries);
						this.industries = this.completerService.local(<Industry[]>industries, 'industry_name', 'industry_name');
					},
					error =>  this.errorMessage = <any>error
				);
  }

  toggleIndustry(industry: Industry) {
  	const industryIndex = this.industriesSelected.indexOf(industry);
  	if (industryIndex === -1) {
  		this.industriesSelected.push(industry);
	  	console.log('Filter added:', industry);
  	} else {
  		this.industriesSelected.splice(industryIndex, 1);
	  	console.log('Filter removed:', industry);
  	}
    this.onFilterChanged(this.industriesSelected);
  }

  onIndustrySelected(industry: CompleterItem) {
  	if (industry) {
	  	const { originalObject } = industry;
		  this.toggleIndustry(originalObject);
	  }
  }

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
