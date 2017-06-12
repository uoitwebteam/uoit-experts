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

  onFilterChanged(filter: Industry[]) {
  	this.controlsService.filter(filter);
  }
}
