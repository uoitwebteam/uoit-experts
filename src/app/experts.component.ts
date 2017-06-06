import { Component } from '@angular/core';

@Component({
  selector: 'expert-centre',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent {
  industries = null;
  experts = null;
  expert = null;

  filter = [];

  errorMessage = null;

  constructor() { }

  onFilterChanged(filter) {
  	this.filter = filter;
  }
}
