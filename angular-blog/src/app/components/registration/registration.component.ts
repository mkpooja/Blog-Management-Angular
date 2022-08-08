import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string = '';
  username: string='';
  email: string = '';
  password: string = '';

  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signup(): void {
    if (this.name.length === 0 ) {
      alert("name should not be blank");
      return;
    } else if (this.username.length === 0 ) {
      alert("username should not be blank");
      return;
    } else if (this.email.length === 0 ) {
      alert("email should not be blank");
      return;
    } else if (!this.email.match( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ) {
      alert("Email is not valid");
      return;  
    } else if  (this.password.length === 0) {
      alert("password should not be blank");
      return;
    }



    const body: any = {
      name: this.name, 
      username: this.username,
      email: this.email, 
      password: this.password
    };
    this.blogService.registerUser(body).pipe(take(1)).subscribe(res => {
      if (!!res && res === "User registered successfully") {
        alert("You are successfully Register");
        this.router.navigate(["/login"]);
      } else {
        alert('something went wrong while create registration');
      }
      
    }, (error: any) => {
      console.log('>>>>>', error);
      if (error.status === 200 && error?.error?.text === "User registered successfully") {
        alert("You are successfully Register");
        this.router.navigate(["/login"]);
      } else {
        alert('something went wrong while create registration');
      }
    })
  }

}
