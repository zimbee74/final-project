import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsShowService {
  constructor(private http: HttpClient) { }


  postsShowUrl = '/posts/'; // RAILS AJAX route which returns an array of the most recent Post rows

  getPost(id) {
    return this.http.get(this.postsShowUrl + id);
  }

}
