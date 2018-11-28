import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UsersShowComponent } from './users-show.component';

@NgModule({
  declarations: [
    UsersShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsersShowComponent]
})
export class UsersShowModule { }
