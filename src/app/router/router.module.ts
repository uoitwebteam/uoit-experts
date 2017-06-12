import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertProfileComponent } from '../profile/profile.component';
import { ExpertListComponent } from '../list/list.component';

const appRoutes: Routes = [
	{ 
		path: 'expert/:id',
		component: ExpertProfileComponent
	},
	{
	  path: 'experts',
	  component: ExpertListComponent,
	  data: { title: 'Heroes List' }
	},
	{
		path: '',
	  redirectTo: '/experts',
	  pathMatch: 'full'
	},
	// {
	// 	path: '**',
	// 	component: PageNotFoundComponent
	// }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExpertRouterModule { }
