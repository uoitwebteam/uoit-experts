import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExpertsService } from './experts/experts.service';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
  	ExpertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
