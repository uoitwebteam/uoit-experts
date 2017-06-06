import { Component } from '@angular/core';

import { ExpertsService } from './experts/experts.service';

import { Industry, Expert, SearchQuery } from './models';

@Component({
  selector: 'expert-centre',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent {
  title = 'app works!';
  errorMessage = null;

  filters = null;
  experts = null;
  expert = null;

  constructor(private expertsService: ExpertsService) {
  	this.getIndustries();
  }

  getIndustries() {
  	this.expertsService.getIndustries()
				.subscribe(
					filters => {
						console.log('Filters returned:', filters);
						this.filters = <Industry[]>filters
					},
					error =>  this.errorMessage = <any>error
				);
  }
}
