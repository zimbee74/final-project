import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostsCreateService {
  constructor(private http: HttpClient) { }


  postsCreateUrl = '/posts'; // RAILS AJAX route which returns an array of the most recent Post rows

  createPost(post) {
    return this.http.post(this.postsCreateUrl, post, httpOptions);
  }

}
