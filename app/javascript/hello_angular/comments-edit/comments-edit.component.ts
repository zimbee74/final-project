import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostsShowService } from '../comments-show/posts-show.service';
import { PostsEditService } from './comments-edit.service';
@Component({
  selector: 'app-comments-edit',
  template: require("./comments-edit.component.html")
})

export class PostsEditComponent {
  name = 'COMMENTS edit!';
  post = {
    id: null,
    heading: '',
    content: '',
    image: ''
  };

  constructor(
    private commentsShowService: CommentsShowService,
    private commentsEditService: CommentsEditService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    const id = this.route.snapshot.paramMap.get('id');

    postsShowService.getComment( id )
    .subscribe((data: any) => {
      this.comment = data;
      console.log("comment", this.comment);
    });

  }

  save(){
    console.log('save():', this.comment);

    this.postsEditService.editComment(this.comment)
    .subscribe((data: any) => {
      this.comment = data;
      console.log("UPDATED comment", this.comment);
      if( this.comment.id ){
        // success! Redirect to show route
        this.router.navigateByUrl(`/comments/${this.comment.id}`)
      } else {
        // failure... handle error? show message?
      }
    });

  }

} // class
