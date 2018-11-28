import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsEditService {
  constructor(private http: HttpClient) { }


  postsEditUrl = '/posts'; // RAILS AJAX route which returns an array of the most recent Post rows

  editPost(post) {
    return this.http.post(this.postsEditUrl, post, httpOptions);
  }

}
