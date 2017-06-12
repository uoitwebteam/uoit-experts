/**
 * Angular
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

/**
 * Community modules
 */
import { NgPipesModule } from 'ngx-pipes';
import { Ng2CompleterModule } from 'ng2-completer';

/**
 * Application features
 */
// - Main component
import { ExpertsComponent } from './experts.component';
// - Services and resolvers
import { ExpertsService } from './experts/experts.service';
import { ControlsService } from './controls/controls.service';
import { ExpertProfileResolver } from './profile/profile-resolver.service';
// - Router module
import { ExpertRouterModule } from './router/router.module';
// - Routed components
import { ExpertProfileComponent } from './profile/profile.component';
import { ExpertListComponent } from './list/list.component';
// - Static components
import { FilterControlsComponent } from './controls/filter-controls.component';
import { SortControlsComponent } from './controls/sort-controls.component';
import { SearchControlsComponent } from './controls/search-controls.component';

@NgModule({
  declarations: [
    ExpertsComponent,
    ExpertProfileComponent,
    ExpertListComponent,
    FilterControlsComponent,
    SortControlsComponent,
    SearchControlsComponent,
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
  	ControlsService,
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
