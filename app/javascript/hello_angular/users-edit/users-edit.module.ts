import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { UsersEditComponent } from './users-edit.component';

@NgModule({
  declarations: [
    UsersEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsersEditComponent]
})
export class UsersEditModule { }
