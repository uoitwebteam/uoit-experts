import { Component, Input, OnInit } from '@angular/core';

import 'rxjs/add/operator/retry';

import { ExpertsService } from '../experts/experts.service';
import { Expert } from '../models';

@Component({
  selector: 'expert-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() filterBy: any;
	@Input() orderBy: any;
	@Input() searchBy: string;

	experts: Expert[];
	expert: Expert;
  errorMessage;

  constructor(private expertsService: ExpertsService) { }

  ngOnInit() {
  	this.getExperts();
  }

  onShowDetail(expert) {
  	console.log('Expert detail opened for: ', expert.username);
  	this.getExpert(expert);
  }

  getExperts() {
  	this.expertsService.getExperts()
		  	.retry(5)
				.subscribe(
					experts => {
						console.log('Experts returned:', experts);
						this.experts = <Expert[]>experts
					},
					error =>  this.errorMessage = <any>error
				);
  }

  getExpert(expert) {
  	this.expertsService.getExpert(expert.username)
		  	.retry(5)
				.subscribe(
					expert => {
						console.log('Expert returned:', expert);
						this.expert = expert;
					},
					error =>  this.errorMessage = <any>error
				);
  }
}
