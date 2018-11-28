import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }


  usersIndexUrl = '/users'; // RAILS AJAX route which returns an array of the most recent Post rows

  getUsers() {
    return this.http.get(this.usersIndexUrl);
  }

}
