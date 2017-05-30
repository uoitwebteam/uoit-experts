import { Component, OnInit } from '@angular/core';

import { ExpertsService } from '../experts/experts.service';

import { Industry, Expert } from '../models';

@Component({
  selector: 'expert-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  errorMessage = null;

  filters = null;
  experts = null;
  expert = null;

  constructor(private expertsService: ExpertsService) { }

  ngOnInit() {
  	this.getExperts();
  }

  onShowDetail(expertId) {
  	console.log('Expert detail opened for: ', expertId);
  	this.getExpert(expertId);
  }

  getExperts() {
  	this.expertsService.getExperts()
				.subscribe(
					experts => {
						console.log('Experts returned:', experts);
						this.experts = <Expert[]>experts
					},
					error =>  this.errorMessage = <any>error
				);
  }

  getExpert(expertId) {
  	this.expertsService.getExpert(expertId)
				.subscribe(
					expert => {
						console.log('Expert returned:', expert);
						this.expert = <Expert>expert
					},
					error =>  this.errorMessage = <any>error
				);
  }
}
