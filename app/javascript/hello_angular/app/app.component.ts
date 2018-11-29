import { Component } from '@angular/core';
//
// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
//

@Component({
  selector: 'hello-angular',
  template: `<hr/><router-outlet></router-outlet>`
})
export class AppComponent {
  name = 'Angular APP Component Section Edition!';
}
