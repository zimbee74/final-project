import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { PostsCreateComponent } from './posts-create.component';

@NgModule({
  declarations: [
    PostsCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PostsCreateComponent]
})
export class PostsCreateModule { }
