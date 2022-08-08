import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogListComponent,
    ClientHeaderComponent,
    AppHeaderComponent,
    RegistrationComponent,
    CreateBlogComponent,
    BlogDetailComponent,
    SearchBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
