import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/modal/blog.modal';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];
  constructor(
    private blogservice:BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllBlogItems();
  }

  getAllBlogItems(): void {
    this.blogservice.getAllBlogs().subscribe((res: any) =>{
      if (!!res && res?.content && Array.isArray(res?.content)) {
        this.blogs = res?.content;
      }
    })
  }

  getDetail(blog: Blog): void {
    this.router.navigate([`/blog-detail/${blog?.id}`]);
  }
  
  deleteBlog(blog: Blog): void {
    this.blogservice.deleteBlog(blog?.id).pipe(take(1)).subscribe(res => {
      alert('Delete blog successfully');
      this.getAllBlogItems();
    }, error => {
      alert('Delete blog successfully');
      this.getAllBlogItems();
    });
  }

}
