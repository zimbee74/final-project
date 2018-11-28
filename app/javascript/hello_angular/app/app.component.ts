import { Component } from '@angular/core';
//
// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
//

@Component({
  selector: 'hello-angular',
  template: `<h1>Hello {{name}}</h1><router-outlet></router-outlet>`
})
export class AppComponent {
  name = 'Angular APP Component Section Edition!';
}
