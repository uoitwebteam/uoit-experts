import {
	Component,
	ChangeDetectionStrategy,
	Input,
	OnInit
} from '@angular/core';

import { Expert } from '../models';

@Component({
  selector: 'expert-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertProfileComponent implements OnInit {

	@Input() expert: Expert;

  constructor() { }

  ngOnInit() {
  }

}
