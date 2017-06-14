/**
 * Angular
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

/**
 * Community modules
 */
import { NgPipesModule } from 'ngx-pipes';

/**
 * Application features
 */
// - Main component
import { ExpertsComponent } from './experts.component';
// - Services and resolvers
import { ExpertsService } from './experts/experts.service';
import { ExpertProfileResolver } from './profile/profile-resolver.service';
// - Router module
import { ExpertRouterModule } from './router/router.module';
// - Routed components
import { ExpertProfileComponent } from './profile/profile.component';
import { ExpertListComponent } from './list/list.component';
// - Feature modules
import { ControlsModule } from './controls/controls.module';

@NgModule({
  declarations: [
    ExpertsComponent,
    ExpertProfileComponent,
    ExpertListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgPipesModule,
    ControlsModule,
    // router - ALWAYS LAST
    ExpertRouterModule,
  ],
  providers: [
  	ExpertsService,
  	ExpertProfileResolver,
  ],
  bootstrap: [ExpertsComponent]
})
export class ExpertsModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
