import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersEditService {
  constructor(private http: HttpClient) { }


  usersEditUrl = '/users/'; // RAILS AJAX route which returns an array of the most recent Post rows

  editUser(user) {
    return this.http.post(this.usersEditUrl + user.id, user, httpOptions);
  }

}
