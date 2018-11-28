import { Component } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';
import { UsersShowService } from './users-show.service';
@Component({
  selector: 'app-users-show',
  template: require("./users-show.component.html")
})

export class UsersShowComponent {
  name = 'USERS show!';
  user = {};

  constructor(
    usersShowService: UsersShowService,
    private route: ActivatedRoute
   ) {

     // console.log(this.route.params)

    const id = this.route.snapshot.paramMap.get('id');

    usersShowService.getUser( id )
    .subscribe((data: any) => {
      this.user = data;
      console.log("%c user", 'font-size: 14pt', this.user);
    });

  } // constructor

} // class
