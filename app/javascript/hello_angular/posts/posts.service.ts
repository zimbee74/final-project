import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) { }


  postsIndexUrl = '/latest'; // RAILS AJAX route which returns an array of the most recent Post rows

  getPosts() {
    return this.http.get(this.postsIndexUrl);
  }

}
