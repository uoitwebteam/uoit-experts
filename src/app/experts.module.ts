import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgPipesModule } from 'ngx-pipes';
import { Ng2CompleterModule } from 'ng2-completer';

/**
 * Main component, service and router
 */
import { ExpertsComponent } from './experts.component';
import { ExpertsService } from './experts/experts.service';
import { ExpertRouterModule } from './router/router.module';
/**
 * Routed components
 */
import { ExpertProfileComponent } from './profile/profile.component';
import { ExpertListComponent } from './list/list.component';
import { ExpertListItemComponent } from './list-item/list-item.component';
/**
 * Sorting/filtering controls
 */
import { FilterControlsComponent } from './filter-controls/filter-controls.component';
import { SortControlsComponent } from './sort-controls/sort-controls.component';

@NgModule({
  declarations: [
    ExpertsComponent,
    ExpertProfileComponent,
    ExpertListComponent,
    ExpertListItemComponent,
    FilterControlsComponent,
    SortControlsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgPipesModule,
    Ng2CompleterModule,
    // router
    ExpertRouterModule,
  ],
  providers: [
  	ExpertsService
  ],
  bootstrap: [ExpertsComponent]
})
export class ExpertsModule { }
