import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expert-sort-controls',
  template: `<label>Sort by<br/>
		<button class="button hollow tiny">First name</button>
		<button class="button hollow tiny">Last name</button>
		<button class="button hollow tiny">doo</button>
	</label>`
})
export class SortControlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
