import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2CompleterModule } from 'ng2-completer';

import { FilterControlsComponent } from './filter-controls.component';
import { SortControlsComponent } from './sort-controls.component';
import { SearchControlsComponent } from './search-controls.component';
import { ControlsComponent } from './controls.component';
import { ControlsService } from './controls.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
  ],
  declarations: [
    FilterControlsComponent,
    SortControlsComponent,
    SearchControlsComponent,
    ControlsComponent,
  ],
  providers: [
  	ControlsService,
  ],
  exports: [
    ControlsComponent,
  ]
})
export class ControlsModule { }
