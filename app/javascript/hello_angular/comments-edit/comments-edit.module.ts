import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CommentsEditComponent } from './comments-edit.component';

@NgModule({
  declarations: [
    CommentsEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CommentsEditComponent]
})
export class CommentsEditModule { }
