import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsEditService } from './posts-edit.service';
@Component({
  selector: 'app-posts-edit',
  template: require("./posts-edit.component.html")
})

export class PostsEditComponent {
  name = 'POSTS edit!';
  post = {
    id: null,
    heading: '',
    content: '',
    image: ''
  };

  constructor( private postsEditService: PostsEditService, private router: Router ) {}

  save(){
    console.log('save():', this.post);

    this.postsEditService.editPost(this.post)
    .subscribe((data: any) => {
      this.post = data;
      console.log("EDITED post", this.post);
      if( this.post.id ){
        // success! Redirect to show route
        this.router.navigateByUrl(`/posts/${this.post.id}`)
      } else {
        // failure... handle error? show message?
      }
    });

  }

} // class
