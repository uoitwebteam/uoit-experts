import {
	Component,
	Input,
	Output,
	EventEmitter,
	OnInit,
	forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
	CompleterService,
	CompleterData,
	CompleterItem,
	CtrCompleter
} from 'ng2-completer';

import { ExpertsService } from '../experts/experts.service';
import { Industry } from '../models';

@Component({
  selector: 'expert-filter-controls',
  template: `<div>
		<label>Filter by industry
			<ng2-completer [datasource]="industries"
										 (selected)="onIndustrySelected($event)"
										 minSearchLength="0"
										 clearSelected="true"
										 openOnFocus="true"
										 placeholder="E.g. &ldquo;Accounting&rdquo;">
			</ng2-completer>
		</label>
		<span class="label" *ngFor="let industry of industriesSelected">
			<button (click)="toggleIndustry(industry)">&times;</button> {{ industry.industry_name }}
		</span>
	</div>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterControlsComponent),
      multi: true
    }
  ]
})
export class FilterControlsComponent implements OnInit, ControlValueAccessor {

  @Output() onFilterChanged = new EventEmitter<Industry[]>();
  @Input('value') industriesSelected: Industry[] = [];
  // overwritten by registerOnChange() and registerOnTouched()
  onChange: any = () => { };
  onTouched: any = () => { };

  protected industries: CompleterData = this.completerService.local(
  	this.expertsService.getIndustries(),
  	'industry_name',
  	'industry_name'
  );

  errorMessage = null;

  constructor(
  	private expertsService: ExpertsService,
  	private completerService: CompleterService
  ) { }

  ngOnInit() { }

  toggleIndustry(industry: Industry) {
  	const industryIndex = this.industriesSelected.indexOf(industry);
  	if (industryIndex === -1) {
  		this.industriesSelected.push(industry);
	  	console.log('Filter added:', industry);
  	} else {
  		this.industriesSelected.splice(industryIndex, 1);
	  	console.log('Filter removed:', industry);
  	}
    this.onFilterChanged.emit(this.industriesSelected);
    this.onChange(this.industriesSelected)
  }

  onIndustrySelected(industry: CompleterItem) {
  	if (industry) {
	  	const { originalObject } = industry;
		  this.toggleIndustry(originalObject);
	  }
  }

  /**
   * ControlValueAccessor interface
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { 
    this.onTouched = fn;
  }

	writeValue(value) {
	  if (value) {
	    this.industriesSelected = value;
	  }
	}
}
