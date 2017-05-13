import { Component } from '@angular/core';

import { ExpertsService } from './experts/experts.service';

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

  constructor(private expertsService: ExpertsService) { this.getIndustries(); this.getExperts(); }

  getIndustries() {
  	this.expertsService.getIndustries()
				.subscribe(
					filters => this.filters = filters,
					error =>  this.errorMessage = <any>error
				);
  }

  getExperts() {
  	this.expertsService.getExperts()
				.subscribe(
					experts => this.experts = experts,
					error =>  this.errorMessage = <any>error
				);
  }

  getExpert(id) {
  	this.expertsService.getExpert(id)
				.subscribe(
					expert => this.expert = expert,
					error =>  this.errorMessage = <any>error
				);
  }
}
