import { Component,OnInit } from '@angular/core';
import { LogindetailsService } from '../logindetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  country:any=[]
  constructor(public loginservice:LogindetailsService){}

  ngOnInit(){


    this.loginservice.getcountries().subscribe((d)=>{
       console.log(d)
      this.country=d

 })

  }

}
