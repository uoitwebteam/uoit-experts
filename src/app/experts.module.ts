import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { NgPipesModule } from 'ngx-pipes';
import { Ng2CompleterModule } from 'ng2-completer';

/**
 * Main component, services and router
 */
import { ExpertsComponent } from './experts.component';
import { ExpertsService } from './experts/experts.service';
import { ExpertProfileResolver } from './profile/profile-resolver.service';
import { ExpertRouterModule } from './router/router.module';
/**
 * Routed components
 */
import { ExpertProfileComponent } from './profile/profile.component';
import { ExpertListComponent } from './list/list.component';
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
    FilterControlsComponent,
    SortControlsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgPipesModule,
    Ng2CompleterModule,
    // router - ALWAYS LAST
    ExpertRouterModule,
  ],
  providers: [
  	ExpertsService,
  	ExpertProfileResolver
  ],
  bootstrap: [ExpertsComponent]
})
export class ExpertsModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
