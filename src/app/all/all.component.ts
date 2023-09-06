import { Component } from '@angular/core';
import { LogindetailsService } from '../logindetails.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  country:any=[]
  constructor(public loginservice:LogindetailsService){}

  ngOnInit(){


    this.loginservice.getcountries().subscribe((d)=>{
       console.log(d)
      this.country=d

 })

  }

  

}
