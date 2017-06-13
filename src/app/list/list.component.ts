import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ExpertsService } from '../experts/experts.service';
import { ControlsService } from '../controls/controls.service';
import { Expert } from '../models';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ExpertListComponent implements OnInit {
	
	@Input() filterBy: any[];
	@Input() orderBy: any;
	@Input() searchBy: string;

	public experts: Observable<Expert[]> = this.expertsService
		.getExperts()
	  .retry(5);

  protected errorMessage;

  constructor(
  	private expertsService: ExpertsService,
  	private controlsService: ControlsService,
  	private router: Router,
  	private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  	this.controlsService.filterControls$.subscribe(
  		filters => {
  			console.log('Filters selected:', filters);
  			this.filterBy = filters;
  		}
  	);
  	this.controlsService.searchControls$.subscribe(
  		search => {
  			console.log('Query submitted:', search);
  			this.searchBy = search;
  		}
  	);
  	this.controlsService.sortControls$.subscribe(
  		sort => {
  			console.log('Results sorted by ' + sort);
  			this.orderBy = sort;
  		}
  	);
  	
  }

  onShowDetail(expert: Expert) {
  	console.log('Loading expert:', expert.username);
    this.router.navigate([expert.username], { relativeTo: this.route });
  }
}
