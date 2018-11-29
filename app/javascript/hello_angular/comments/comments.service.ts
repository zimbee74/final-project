import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) { }


  commentsIndexUrl = '/latest'; // RAILS AJAX route which returns an array of the most recent Post rows

  getComments() {
    return this.http.get(this.commentsIndexUrl);
  }

}
