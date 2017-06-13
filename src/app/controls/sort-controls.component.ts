import {
	Component,
	Output,
	EventEmitter,
	OnInit
} from '@angular/core';

@Component({
  selector: 'expert-sort-controls',
  template: `<label>Sort by
  	<div class="button-group tiny">
			<button class="button" (click)="onSortSelected('firstname')" [ngClass]="{ hollow: !((sort === 'firstname') || (sort === '-firstname')) }">
				First name
				<span [ngClass]="{ icon_arrow_down: (sort === '-firstname'), icon_arrow_up: (sort === 'firstname') }"></span>
			</button>
			<button class="button" (click)="onSortSelected('lastname')" [ngClass]="{ hollow: !((sort === 'lastname') || (sort === '-lastname')) }">
				Last name
				<span [ngClass]="{ icon_arrow_down: (sort === '-lastname'), icon_arrow_up: (sort === 'lastname') }"></span>
			</button>
			<button class="button" (click)="onSortSelected('job_title')" [ngClass]="{ hollow: !((sort === 'job_title') || (sort === '-job_title')) }">
				Title
				<span [ngClass]="{ icon_arrow_down: (sort === '-job_title'), icon_arrow_up: (sort === 'job_title') }"></span>
			</button>
			<button class="button" (click)="onSortSelected('city')" [ngClass]="{ hollow: !((sort === 'city') || (sort === '-city')) }">
				City
				<span [ngClass]="{ icon_arrow_down: (sort === '-city'), icon_arrow_up: (sort === 'city') }"></span>
			</button>
		</div>
	</label>`
})
export class SortControlsComponent implements OnInit {

  @Output() onSortChanged = new EventEmitter<string>();
  sort: any;

  constructor() { }

  ngOnInit() {
  }

  onSortSelected(value) {
  	console.log('Sort changed:', value);
  	if (value === this.sort) {
  		let sort = value.indexOf('-') === -1 ? `-${value}` : value;
  		this.onSortChanged.emit(sort);
  		this.sort = sort;
  	} else if (value && value !== '') {
  		this.onSortChanged.emit(value);
  		this.sort = value;
  	}
  }

}
