import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsShowService {
  constructor(private http: HttpClient) { }


  commentsShowUrl = '/comments/'; // RAILS AJAX route which returns an array of the most recent Post rows

  getComment(id) {
    return this.http.get(this.commentsShowUrl + id);
  }

}
