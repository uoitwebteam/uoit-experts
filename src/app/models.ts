const queryDefault = {
	fields: 'user:username,user:firstname,user:lastname,user:job_title,tagline,user:location:city,avatar:l:url,user:location:state,user:location:country,engagement:topics',
	keywords: '',
	location: '',
	industry: '',
	portfolio: '',
	availability: '',
	fee_min: '',
	fee_max: '',
	sort: '',
	page_number: 1,
	page_size: 9999,
	keyword: ''
};

export interface Topic {
	id: number;
	name: string;
}

export class Industry {
  constructor(
    public id: number, 
    public name: string, 
    public count?: number
  ) { }
}

export class Expert {
  constructor(expert: {
  	username: string,
  	firstname: string,
  	lastname: string,
  	job_title: string,
  	tagline: string,
  	topics: Topic[],
  	country: string,
  	state: string,
  	city: string,
  	url: string,
  }) {
  	Object.assign(this, expert);
  }
}

export class SearchQuery {
  constructor(query: {
		fields?: string,
		keywords?: string,
		location?: string,
		industry?: string,
		portfolio?: string,
		availability?: string,
		fee_min?: string,
		fee_max?: string,
		sort?: string,
		page_number?: number,
		page_size?: number,
		keyword?: string
  }) {
		Object.assign(this, queryDefault, query)
	}
}
