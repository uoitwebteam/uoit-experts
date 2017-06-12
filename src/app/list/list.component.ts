import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

import { ExpertsService } from '../experts/experts.service';
import { Expert } from '../models';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ExpertListComponent implements OnInit {
	
	@Input() filterBy: any;
	@Input() orderBy: any;
	@Input() searchBy: string;

	public experts: Observable<Expert[]> = this.expertsService
		.getExperts()
	  .retry(5);

  protected errorMessage;

  constructor(
  	private expertsService: ExpertsService,
  	private router: Router,
  	private route: ActivatedRoute,
  ) { }

  ngOnInit() { }

  onShowDetail(expert: Expert) {
  	console.log('Loading expert:', expert.username);
    this.router.navigate([expert.username], { relativeTo: this.route });
  }
}
