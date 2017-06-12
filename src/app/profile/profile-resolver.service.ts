import { Injectable } from '@angular/core';
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';

import { ExpertsService } from '../experts/experts.service';
import { Expert } from '../models';

@Injectable()
export class ExpertProfileResolver implements Resolve<Expert> {
  constructor(private expertsService: ExpertsService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Expert> { // Promise<Expert>
    let id = route.params['id'];
    return this.expertsService.getExpert(id)
    	.mergeMap((expert: Expert) => {
	      if (expert) {
	    		console.log('Resolver resolved:', expert);
	        return Observable.of(expert);
	      } else {
	        this.router.navigate(['/experts']);
	        return null;
	      }
	    })
	    .retry(5);
  }
}
