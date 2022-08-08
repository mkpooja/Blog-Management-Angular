import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  title: string = '';
  description: string = '';
  content: string = '';

  constructor(
    private blogService: BlogService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  createBlog(): void {
    if (this.title.length === 0 ) {
      alert("title should not be blank");
    } else if (this.description.length === 0 ) {
      alert("description should not be blank");
    } else if (this.content.length === 0 ) {
      alert("content should not be blank");
    } else if (this.title.length < 2) {
      alert("Title should be more than 2 character");
    } else if (this.description.length < 10) {
      alert("description should be more than 10 character");
    } else if (this.content.length < 10) {
      alert("Content should be more than 10 character");
    } else {
      const body: any = {
        title: this.title,
        description: this.description,
        content: this.content,
        comments: []
      }
      this.blogService.createBlog(body).pipe(take(1)).subscribe(res => {
        if (!!res && res?.id) {
          this.route.navigate([`/blog-detail/${res?.id}`]);
        }
      })
    }
  }

}
