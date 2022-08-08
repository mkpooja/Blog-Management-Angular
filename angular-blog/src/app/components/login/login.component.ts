import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { BlogService } from 'src/app/blog.service';
//import { loginEmail, loginPassword } from 'src/app/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string = "";
  email: string = "";
  constructor(
    private router: Router,
    private blogservice:BlogService
  ) { }

  ngOnInit(): void {
  }
  signIn(): void {
    if (this.email.length === 0 ) {
      alert("email should not be blank");
      return;
    } else if (this.password.length === 0 ) {
      alert("password should not be blank");
      return;
        } else if (!this.email.match( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ) {
      alert("Email is not valid");
      return; 
        } 
    console.log("djgjkf");
    const body:any={
      usernameOrEmail: this.email,
      password:this.password
    };
 this.blogservice.login(body).pipe(take(1)).subscribe(res =>{
  console.log("====>",res);
  if(!!res && res.accessToken)
  {
    this.blogservice.setAuthorization(res.accessToken);
    this.router.navigate(["/blog-list"]);
  }
  else {
    alert('UserEmail or Password has been incorrect');
  }
 },err=>{
  alert('UserEmail or Password has been incorrect');
 }
 );
 
    /*if (this.email === loginEmail && this.password === loginPassword) {
      this.bookService.storeAuthorization('success');
      this.router.navigate(['/book-list']);
    } else {
      alert('UserEmail or Password has been incorrect');
    }*/
  }
}
