import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentsCreateService {
  constructor(private http: HttpClient) { }


  commentsCreateUrl = '/posts'; // RAILS AJAX route which returns an array of the most recent Post rows

  createComment(comment) {
    return this.http.comment(this.postsCreateUrl, comment, httpOptions);
  }

}
