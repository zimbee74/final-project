import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsCreateService } from './posts-create.service';
@Component({
  selector: 'app-posts-create',
  template: require("./posts-create.component.html")
})

export class PostsCreateComponent {
  name = 'POSTS create!';
  post = {
    id: null,
    heading: '',
    content: '',
    image: ''
  };

  constructor( private postsCreateService: PostsCreateService, private router: Router ) {}

  save(){
    console.log('save():', this.post);

    this.postsCreateService.createPost(this.post)
    .subscribe((data: any) => {
      this.post = data;
      console.log("CREATED post", this.post);
      if( this.post.id ){
        // success! Redirect to show route
        this.router.navigateByUrl(`/posts/${this.post.id}`)
      } else {
        // failure... handle error? show message?
      }
    });

  }

} // class
