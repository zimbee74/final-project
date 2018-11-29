import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CommentsComponent]
})
export class CommentsModule { }
