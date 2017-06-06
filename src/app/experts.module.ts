import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgPipesModule } from 'ngx-pipes';

import { ExpertsComponent } from './experts.component';
import { ExpertsService } from './experts/experts.service';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';

@NgModule({
  declarations: [
    ExpertsComponent,
    ProfileComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgPipesModule
  ],
  providers: [
  	ExpertsService
  ],
  bootstrap: [ExpertsComponent]
})
export class ExpertsModule { }
