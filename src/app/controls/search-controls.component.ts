import {
	Component,
	Output,
	EventEmitter,
	OnInit
} from '@angular/core';

@Component({
  selector: 'expert-search-controls',
  template: `<label>Search by name<br/>
		<input #input type="text" [value]="search" (input)="onSearchTyped(input.value)">
	</label>`
})
export class SearchControlsComponent implements OnInit {

  @Output() onSearchChanged = new EventEmitter<string>();
  search: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSearchTyped(value) {
  	console.log('Search typed:', value);
  	if (value && value !== '') {
  		this.onSearchChanged.emit(value)
  	}
  }

}
