import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { LogindetailsService } from '../logindetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  messgevalue:Boolean=false
  message="Email and username is incorrect"

 constructor(public loginservice:LogindetailsService,public router:Router){

 }
 get email() {
  return this.loginForm.get('email');
} 
  
 loginForm=new FormGroup({

    username:new FormControl("",[Validators.email,Validators.required]),
    password:new FormControl("",[Validators.required])

  })

  get username() {
    return this.loginForm.get('username');
  } 
  get password() {
    return this.loginForm.get('password');
  } 


  login(){
    

    if((this.loginForm.value.username===this.loginservice.user.username) && 
    (this.loginForm.value.password === this.loginservice.user.password)){


      this.router.navigate(['/home'])

    }
    else{

     this.messgevalue=true

    

    }
}

}
