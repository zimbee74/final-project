import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PostsShowComponent } from './posts-show.component';

@NgModule({
  declarations: [
    PostsShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostsShowComponent]
})
export class PostsShowModule { }
