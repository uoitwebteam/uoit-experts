import { Component } from '@angular/core';

import { CompleterService, CompleterData } from 'ng2-completer';

import { ExpertsService } from './experts/experts.service';
import { Industry, Expert, SearchQuery } from './models';

@Component({
  selector: 'expert-centre',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent {
  industries = null;
  experts = null;
  expert = null;

  industriesSelected = [];

  errorMessage = null;

  protected dataService: CompleterData;

  constructor(
  	private expertsService: ExpertsService,
  	private completerService: CompleterService
  ) {
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

  onIndustrySelected(industry) {
  	if (industry) {
	  	const { originalObject } = industry;
	  	console.log({ originalObject });
	  	const industryIndex = this.industriesSelected.indexOf(originalObject);
	  	if (industryIndex === -1) {
	  		this.industriesSelected.push(originalObject);
	  	} else {
	  		this.industriesSelected.splice(industryIndex, 1);
	  	}
	  	console.log(this.industriesSelected);
	  }
  }
}
