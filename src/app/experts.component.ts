import { Component } from '@angular/core';

import { ControlsService } from './controls/controls.service';
import { Industry } from './models';

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

  constructor(
  	private controlsService: ControlsService
  ) { }

  onSearchChanged(search: string) {
  	this.controlsService.search(search);
  }

  onSortChanged(sort: string) {
  	this.controlsService.sort(sort);
  }

  onFilterChanged(filter: Industry[]) {
  	this.controlsService.filter(filter);
  }
}
