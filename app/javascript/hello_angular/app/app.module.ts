import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PostsComponent} from '../posts/posts.component';
import { PostsService} from '../posts/posts.service';
import { PostsShowComponent} from '../posts-show/posts-show.component';
import { PostsShowService} from '../posts-show/posts-show.service';
import { PostsCreateComponent} from '../posts-create/posts-create.component';
import { PostsCreateService} from '../posts-create/posts-create.service';
import { PostsEditComponent} from '../posts-edit/posts-edit.component';
import { PostsEditService} from '../posts-edit/posts-edit.service';
import { UsersEditComponent} from '../users-edit/users-edit.component';
import { UsersEditService} from '../users-edit/users-edit.service';

import { CommentsComponent } from '../comments/comments.component';




import { UsersComponent} from '../users/users.component';
import { UsersService } from '../users/users.service';
import { UsersShowComponent} from '../users-show/users-show.component';
import { UsersShowService } from '../users-show/users-show.service';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';




// import { UsersService} from '../posts/users.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsShowComponent,
    PostsCreateComponent,
    PostsEditComponent,
    UsersComponent,
    UsersShowComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dgjch4s7s' } as CloudinaryConfiguration),
  ],
  providers: [
    PostsService,
    PostsShowService,
    PostsCreateService,
    PostsEditService,
    UsersService,
    UsersShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
