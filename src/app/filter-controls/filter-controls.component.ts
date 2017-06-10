import {
	Component,
	Output,
	EventEmitter,
	OnInit
} from '@angular/core';

import { CompleterService, CompleterData, CtrCompleter } from 'ng2-completer';

import { ExpertsService } from '../experts/experts.service';
import { Industry } from '../models';

@Component({
  selector: 'expert-filter-controls',
  templateUrl: './filter-controls.component.html',
  styleUrls: ['./filter-controls.component.css']
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

  toggleIndustry(industry) {
  	const industryIndex = this.industriesSelected.indexOf(industry);
  	if (industryIndex === -1) {
  		this.industriesSelected.push(industry);
	  	console.log('Filter added:', industry);
  	} else {
  		this.industriesSelected.splice(industryIndex, 1);
	  	console.log('Filter removed:', industry);
  	}
  }

  onIndustrySelected(industry) {
  	if (industry) {
	  	const { originalObject } = industry;
		  this.toggleIndustry(originalObject);
	    this.onFilterChanged.emit(this.industriesSelected);
	  	console.log('Filters selected:', this.industriesSelected);
	  }
  }

}
