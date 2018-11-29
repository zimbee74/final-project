import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersShowService } from '../users-show/users-show.service';
import { UsersEditService } from './users-edit.service';
@Component({
  selector: 'app-users-edit',
  template: require("./users-edit.component.html")
})

export class UsersEditComponent {
  name = 'USERS edit!';
  user = {
    id: null,
    name: '',
    email: '',
    password: '',
    image: '',
    address: '',
    dob: ''
  };

  constructor(
    private usersShowService: UsersShowService,
    private usersEditService: UsersEditService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    const id = this.route.snapshot.paramMap.get('id');

    usersShowService.getUser( id )
    .subscribe((data: any) => {
      this.user = data;
      console.log("user", this.user);
    });

  }

  save(){
    console.log('save():', this.user);

    this.usersEditService.editUser(this.user)
    .subscribe((data: any) => {
      this.user = data;
      console.log("UPDATED user", this.user);
      if( this.user.id ){
        // success! Redirect to show route
        this.router.navigateByUrl(`/users/${this.user.id}`)
      } else {
        // failure... handle error? show message?
      }
    });

  }

} // class
