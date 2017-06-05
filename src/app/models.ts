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
	page_size: 1000,
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
	public username: string;
	public firstname: string;
	public lastname: string;
	public job_title: string;
	public tagline: string;
	public topics: Topic[];
	public country: string;
	public state: string;
	public city: string;
	public url: string;

  constructor(expert: any) {
  	const {
	  	username, firstname, lastname,
	  	job_title, tagline, topics,
	  	country, state, city,
	  	url
	  } = expert;

  	Object.assign(this, {
  		username, firstname, lastname,
	  	job_title, tagline, topics,
	  	country, state, city,
	  	url
	  });
  }

  get fullname() {
  	return [this.firstname, this.lastname].join(' ');
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
