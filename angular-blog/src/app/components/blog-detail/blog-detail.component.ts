import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/modal/blog.modal';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  id: number = 0;
  blog: Blog | undefined;
  name: string = '';
  content: string = '';
  email: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      if (!!res && res?.id) {
        this.id = res?.id;
        this.getBlogDetail();
      }
    });
  }

  ngOnInit(): void {
  }

  getBlogDetail(): void {
    this.blogService.getBlogById(this.id).pipe(take(1)).subscribe((res: any) => {
      if (!!res) {
        this.blog = res;
      }
    });
  }

  addComment(): void {
    if (this.name.length <= 5 ) {
      alert("name should not Atlest 5 character long");
      return;
    } else if (this.content.length <=10 ) {
      alert("Content should be minimum 10");
      return;
    } else if (this.email.length === 0 ) {
      alert("email should not be blank");
      return;
    } else if (!this.email.match( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ) {
      alert("Email is not valid");
      return; 
    } 
    const body: any = {
      name: this.name,
      email: this.email,
      body: this.content
    };

    this.blogService.createComment(body, this.blog?.id).pipe(take(1)).subscribe((res: any) => {
      if (!!res && res?.id) {
        this.getBlogDetail();
        this.name = '';
        this.email = '';
        this.content = '';
      }
    });
  }

  showComment(): void {
   const element = <HTMLElement> document.querySelector('.add-comment');
   if (element !== null) {
     element.style.display="block";
     element.scrollIntoView();
   }
  }

  cancel(): void {
    const element = <HTMLElement> document.querySelector('.add-comment');
    if (element !== null) {
      element.style.display="none";
    }
  }

}
