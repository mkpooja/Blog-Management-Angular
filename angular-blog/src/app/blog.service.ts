import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
url:string="http://localhost:8085";
  constructor(
    private router:Router,
    private http:HttpClient
  ) { 
    
  }
  
  getAuthorization(): any {
    const token = localStorage.getItem("token");
    return token; 
  }
  setAuthorization(token :string):void{
    localStorage.setItem("token",token);
  }
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  login(body:any):Observable<any>{
    return this.http.post("/apiservice/api/v1/auth/signin", body);
  }
  getAllBlogs():Observable<any>{
    
    return this.http.get("/apiservice/api/v1/posts",{headers:this.getHeader()});
  }
  getHeader():HttpHeaders{
    const header = new HttpHeaders({ "Authorization": `Bearer ${this.getAuthorization()}` });
    // header.set("Authorization","Bearer "+this.getAuthorization());
    // header.set('xyz', 'zzz')
    return header;
  }

  registerUser(body: any): Observable<any> {
    return this.http.post("/apiservice/api/v1/auth/signup", body);
  }

  createBlog(body: any): Observable<any> {
    console.log('>>>>>', this.getHeader().get("Authorization"));
    return this.http.post('/apiservice/api/v1/posts', body,  { headers: this.getHeader()});
  }

  deleteBlog(postId: number): Observable<any> {
    return this.http.delete('/apiservice//api/v1/posts/' + postId, { headers: this.getHeader()});
  }

  updateBlog(body: any, blogId: number): Observable<any> {
    return this.http.put('/apiservice/api/v1/posts/' + blogId, body,  { headers: this.getHeader()});
  }

  getBlogById(blogId: number): Observable<any> {
    return this.http.get("/apiservice/api/v1/posts/" + blogId,{headers:this.getHeader()});
  }

  createComment(body: any, postId: any): Observable<any> {
    return this.http.post(`/apiservice/api/v1/posts/${postId}/comments`, body, { headers: this.getHeader()});
  }
}
