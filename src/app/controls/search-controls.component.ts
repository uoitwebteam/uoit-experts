import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expert-search-controls',
  template: `<label>Search by name<br/>
		<input type="text" [(ngModel)]="search">
	</label>`
})
export class SearchControlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
