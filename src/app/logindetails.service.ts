import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogindetailsService {

  user={username:"ajana@gmail.com",
  password:"ajana123"
}
  message="Email and password is incorect"

  constructor(public http:HttpClient) { }


//   signin(data:any){

//    if(this.username===data.username && this.password===data.password){

//     return true;
    
//    }
//  else{
//    console.warn("error")
//    return false;
//  }


getcountries(){
 return this.http.get("https://restcountries.com/v2/all?fields=name,region,flag")
}

  }



  

