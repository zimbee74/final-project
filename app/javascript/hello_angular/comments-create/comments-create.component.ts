import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommentsCreateService } from './comments-create.service';
@Component({
  selector: 'app-comments-create',
  template: require("./comments-create.component.html")
})

export class CommentsCreateComponent {
  name = 'COMMENTS create!';
  post = {
    id: null,
    heading: '',
    content: '',
    image: ''
  };

  constructor( private commentsCreateService: CommentsCreateService, private router: Router ) {}

  save(){
    console.log('save():', this.comment);

    this.commentsCreateService.createComment(this.comment)
    .subscribe((data: any) => {
      this.comment = data;
      console.log("CREATED comment", this.comment);
      if( this.comment.id ){
        // success! Redirect to show route
        this.router.navigateByUrl(`/comments/${this.comment.id}`)
      } else {
        // failure... handle error? show message?
      }
    });

  }

} // class
