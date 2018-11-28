import { Component } from '@angular/core';

import { PostsService } from './posts.service';
@Component({
  selector: 'app-posts',
  template: require("./posts.component.html")
})

export class PostsComponent {
  name = 'Angular POSTS Commponent Section!';
  posts = [];

  constructor( postsService: PostsService ) {

    postsService.getPosts()
    .subscribe((data: any) => {
      this.posts = data;
      console.log("posts", this.posts);

    //
    // ngOnInit() {
    //   this.getPosts();
    // }

    });

  } // constructor

} // class
