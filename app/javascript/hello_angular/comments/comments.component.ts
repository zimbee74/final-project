import { Component, Input } from '@angular/core';

// import { CommentsService } from './comments.service';
@Component({
  selector: 'post-comments',
  template: require("./comments.component.html")
})

export class CommentsComponent {

  @Input() comments: any[];

  name = 'Angular COMMENTS Component Section!';

  constructor(){

    // commentsService.getComments()
    // .subscribe((data: any) => {
    //   this.comments = data;
    //   console.log("comments", this.comments);
    //
    // //
    // // ngOnInit() {
    // //   this.getPosts();
    // // }
    //
    // });

  } // constructor

} // class
