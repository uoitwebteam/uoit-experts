import { Component } from '@angular/core';

import { ExpertsService } from './experts/experts.service';

import { Industry, Expert, SearchQuery } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  errorMessage = null;

  filters = null;
  experts = null;
  expert = null;

  constructor(private expertsService: ExpertsService) {
  	// this.getIndustries();
  	// this.getExperts();
  }

  // getIndustries() {
  // 	this.expertsService.getIndustries()
		// 		.subscribe(
		// 			filters => {
		// 				console.log('Filters returned:', filters);
		// 				this.filters = <Industry[]>filters
		// 			},
		// 			error =>  this.errorMessage = <any>error
		// 		);
  // }

  // getExperts() {
  // 	this.expertsService.getExperts()
		// 		.subscribe(
		// 			experts => {
		// 				console.log('Experts returned:', experts);
		// 				this.experts = <Expert[]>experts
		// 			},
		// 			error =>  this.errorMessage = <any>error
		// 		);
  // }
}
