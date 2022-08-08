import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SearchBlogComponent } from './components/search-blog/search-blog.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'blog-detail/:id', component: BlogDetailComponent },
  { path: 'search-blog', component: SearchBlogComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
