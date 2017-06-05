import {
	Component,
	EventEmitter,
	Input,
	Output,
	OnInit
} from '@angular/core';

import { Expert } from '../../models';

@Component({
  selector: 'expert-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	@Input() expert: Expert;
  @Output() onShowDetail = new EventEmitter<Expert>();

  constructor() { }

  ngOnInit() {
  }

  showDetail(expert: Expert) {
    this.onShowDetail.emit(expert);
  }

}
