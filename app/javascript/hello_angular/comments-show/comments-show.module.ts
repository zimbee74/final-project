import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CommentsShowComponent } from './comments-show.component';

@NgModule({
  declarations: [
    CommentsShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CommentsShowComponent]
})
export class CommentsShowModule { }
