import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersShowService {
  constructor(private http: HttpClient) { }


  usersShowUrl = '/users/'; // RAILS AJAX route which returns an array of the most recent Post rows

  getUser(id) {
    return this.http.get(this.usersShowUrl + id);
  }

}
