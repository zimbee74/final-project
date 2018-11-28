import { Component } from '@angular/core';

import { UsersService } from './users.service';
@Component({
  selector: 'app-users',
  template: require("./users.component.html")
})

export class UsersComponent {
  name = 'Users Component';
  users = [];

constructor( usersService: UsersService ) {

  usersService.getUsers()
  .subscribe((data: any) => {
    this.users = data;
    console.log("users", this.users);

  });

} // constructor

} // class
