import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

import {PostsComponent }  from '../posts/posts.component';
import {PostsShowComponent }  from '../posts-show/posts-show.component';
import {PostsCreateComponent }  from '../posts-create/posts-create.component';
import {PostsEditComponent }  from '../posts-edit/posts-edit.component';

import {UsersComponent }  from '../users/users.component';
import {UsersShowComponent }  from '../users-show/users-show.component';

const routes: Routes = [

  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/new', component: PostsCreateComponent },
  { path: 'posts/new', component: PostsEditComponent },
  { path: 'posts/:id', component: PostsShowComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UsersShowComponent },
  //  { path: 'posts/:id', component: PostsShowComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
