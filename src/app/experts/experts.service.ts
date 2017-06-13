import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import {
	Http,
	Response,
	Headers,
	RequestOptions,
	URLSearchParams
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Industry, Expert, SearchQuery } from '../models';

@Injectable()
export class ExpertsService {

  private apiUrl = 'api/v1';
  private apiId = environment.apiId;
  private apiKey = environment.apiKey;
  private apiSecret = environment.apiSecret;

  constructor(private http: Http) { }

  getIndustries(): Observable<Industry[]> {
  	return this.getAccessToken()
			.mergeMap((options: RequestOptions) => {
				return this.http.get(`${this.apiUrl}/organization/${this.apiId}/getfilters`, options);
			})
			.map(this.extractData)
			.map(this.mapIndustries)
			.catch(this.handleError);
  }

  getExperts(): Observable<Expert[]> {
  	return this.getAccessToken()
			.mergeMap((options: RequestOptions) => {
		  	const search = new SearchQuery({
		  		fields: 'user:username,user:firstname,user:lastname,user:job_title,tagline,user:location:city,avatar:l:url,user:location:state,user:location:country,engagement:topics,industry_expertise'
		  	});
		    for (var key in search) {
					options.params.set(key, search[key]);
		    }
				console.log('Final query:', options);
				return this.http.get(`${this.apiUrl}/organization/${this.apiId}/search`, options);
			})
			.map(this.extractData)
			.map(this.mapExperts)
			.catch(this.handleError);
  }

  getExpert(id): Observable<Expert> {
  	return this.getAccessToken()
			.mergeMap((options: RequestOptions) => {
				console.log('Final query:', options);
				return this.http.get(`${this.apiUrl}/organization/${this.apiId}/speaker/${id}`, options);
			})
			.map(this.extractData)
			.catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('Extracted data:', body);
    if (body.success) {
    	return body.data || body.speakers || body.speaker || {};
    } else {
    	throw new Error('An unknown error occurred');
    }
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private getAccessToken () {
    return this.http.get(`${this.apiUrl}/oauth/${this.apiId}/accessToken?oauth_consumer_key=${this.apiKey}&oauth_consumer_secret=${this.apiSecret}`)
			.map(this.extractData)
  		.map(this.extractAccessToken)
			.catch(this.handleError);
  }

  private extractAccessToken (data: any): RequestOptions {
    console.log('Access token retrieved:', data.authorization);
  	const params = new URLSearchParams();
    for (var key in data.authorization) {
			params.set(key, data.authorization[key]);
    }
    const headers = new Headers({
    	'Content-Type': 'application/json',
    	'X-Proxy-URL': 'https://public-api.expertfile.com'
    });
		const options = new RequestOptions({ params, headers });
    return options;
  }

  private mapExperts(data): Expert[] {
		console.log('Speakers retrieved:', data);
  	return data.map(user => new Expert(user));
  }

  private mapIndustries(data): Industry[] {
		console.log('Filters retrieved:', data);
		return data.filters.industries
			.map(industry => new Industry(industry))
			.sort((a,b) => a.industry_id - b.industry_id);
  }
}
