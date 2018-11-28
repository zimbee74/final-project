import { Component } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { PostsShowService } from './posts-show.service';
@Component({
  selector: 'app-posts-show',
  template: require("./posts-show.component.html")
})

export class PostsShowComponent {
  name = 'POSTS show!';
  post = {};

  constructor(
    postsShowService: PostsShowService,
    private route: ActivatedRoute
   ) {

     // console.log(this.route.params)

    const id = this.route.snapshot.paramMap.get('id');

    postsShowService.getPost( id )
    .subscribe((data: any) => {
      this.post = data;
      console.log("post", this.post);
    });

  } // constructor

} // class
