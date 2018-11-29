import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CommentsCreateComponent } from './comments-create.component';

@NgModule({
  declarations: [
    CommentsCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CommentsCreateComponent]
})
export class CommentsCreateModule { }
