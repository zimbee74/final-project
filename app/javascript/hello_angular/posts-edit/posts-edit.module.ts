import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PostsEditComponent } from './posts-edit.component';

@NgModule({
  declarations: [
    PostsEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostsEditComponent]
})
export class PostsEditModule { }
