import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
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

	experts: Observable<Expert[]>;
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
  	this.experts = this.expertsService
  		.getExperts()
		  .retry(5)
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
