import { Component } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { CommentsShowService } from './comments-show.service';
@Component({
  selector: 'app-comments-show',
  template: require("./comments-show.component.html")
})

export class CommentsShowComponent {
  name = 'COMMENTS show!';
  post = {};

  constructor(
    commentsShowService: CommentsShowService,
    private route: ActivatedRoute
   ) {

     // console.log(this.route.params)

    const id = this.route.snapshot.paramMap.get('id');

    postsShowService.getComment( id )
    .subscribe((data: any) => {
      this.comment = data;
      console.log("comment", this.post);
    });

  } // constructor

} // class
