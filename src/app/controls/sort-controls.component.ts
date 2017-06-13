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
			<button class="button" (click)="onSortSelected('firstname')" [ngClass]="{ hollow: !(sort === 'firstname') }">
				First name
			</button>
			<button class="button" (click)="onSortSelected('lastname')" [ngClass]="{ hollow: !(sort === 'lastname') }">
				Last name
			</button>
			<button class="button" (click)="onSortSelected('job_title')" [ngClass]="{ hollow: !(sort === 'job_title') }">
				Title
			</button>
			<button class="button" (click)="onSortSelected('city')" [ngClass]="{ hollow: !(sort === 'city') }">
				City
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
  	if (value && value !== '') {
  		this.onSortChanged.emit(value);
  		this.sort = value;
  	}
  }

}
