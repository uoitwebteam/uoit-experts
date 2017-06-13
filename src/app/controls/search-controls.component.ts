import {
	Component,
	Output,
	EventEmitter,
	OnInit
} from '@angular/core';

@Component({
  selector: 'expert-search-controls',
  template: `<label>Search by name<br/>
		<input type="text" [value]="search" (input)="onSearchTyped($event)">
	</label>`
})
export class SearchControlsComponent implements OnInit {

  @Output() onSearchChanged = new EventEmitter<string>();
  search: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearchTyped(event: Event) {
  	const { value } = <HTMLInputElement>event.target;
  	console.log('Search typed:', value);
  	if (value && value !== '') {
  		this.onSearchChanged.emit(value)
  	}
  }

}
