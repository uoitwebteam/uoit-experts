import {
	Component,
	Output,
	EventEmitter,
	OnInit
} from '@angular/core';

import {
	CompleterService,
	CompleterData,
	CompleterItem,
	CtrCompleter
} from 'ng2-completer';

import { ExpertsService } from '../experts/experts.service';
import { Industry } from '../models';

@Component({
  selector: 'expert-filter-controls',
  template: `<div>
		<label>Filter by industry
			<ng2-completer [(ngModel)]="industry"
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
	</div>`
})
export class FilterControlsComponent implements OnInit {

  @Output() onFilterChanged = new EventEmitter<Industry[]>();

  protected industries: CompleterData;
  protected industriesSelected: Industry[] = [];

  errorMessage = null;

  constructor(
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
    this.onFilterChanged.emit(this.industriesSelected);
  }

  onIndustrySelected(industry: CompleterItem) {
  	if (industry) {
	  	const { originalObject } = industry;
		  this.toggleIndustry(originalObject);
	  }
  }

}
