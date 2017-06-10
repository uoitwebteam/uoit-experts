import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'expert-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	
	@Input() filterBy: any;
	@Input() orderBy: any;
	@Input() searchBy: string;

	public experts$: Observable<Expert[]> = this.expertsService
		.getExperts()
	  .retry(5);

	public expert$: Observable<Expert> = new Subject<any>()
		.map(expert => expert.username)
		.flatMap(username => this.expertsService.getExpert(username))
  	.retry(5);

  public expert: any;

  protected errorMessage;

  constructor(private expertsService: ExpertsService) { }

  ngOnInit() {
		this.expert$.subscribe(
			expert => {
				console.log('Expert returned:', expert);
				this.expert = expert;
			});
  }
}
