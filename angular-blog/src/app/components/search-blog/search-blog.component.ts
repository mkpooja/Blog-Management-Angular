import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/blog.service';
import { Blog } from 'src/app/modal/blog.modal';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.scss']
})
export class SearchBlogComponent implements OnInit {
  blogs: Blog[] = [];
  searchBlogs: Blog[] = [];
  searchKeyWord: string = '';
  constructor(
    private blogservice: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.blogservice.getAllBlogs().subscribe((res: any) =>{
      if (!!res && res?.content && Array.isArray(res?.content)) {
        this.blogs = res?.content;
      }
    })
  }

  searchBlog(): void {
    setTimeout(() => {
      if (this.searchKeyWord === '') {
        this.searchBlogs = [];
        return;
      }
      this.searchBlogs = this.blogs.filter((item: Blog) => item?.title.toLowerCase().includes(this.searchKeyWord.toLowerCase()));
    }, 400);
    
  }

  getDetail(blog: Blog): void {
    this.router.navigate([`/blog-detail/${blog?.id}`]);
  }

}
