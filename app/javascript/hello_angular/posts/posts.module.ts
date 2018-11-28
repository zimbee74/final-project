import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PostsComponent } from './posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostsComponent]
})
export class PostsModule { }
