import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgPipesModule } from 'ngx-pipes';
import { Ng2CompleterModule } from 'ng2-completer';

import { ExpertsComponent } from './experts.component';
import { ExpertsService } from './experts/experts.service';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { FilterControlsComponent } from './filter-controls/filter-controls.component';

@NgModule({
  declarations: [
    ExpertsComponent,
    ProfileComponent,
    ListComponent,
    ItemComponent,
    FilterControlsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgPipesModule,
    Ng2CompleterModule
  ],
  providers: [
  	ExpertsService
  ],
  bootstrap: [ExpertsComponent]
})
export class ExpertsModule { }
