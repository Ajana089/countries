import { Component,OnInit } from '@angular/core';
import { LogindetailsService } from '../logindetails.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent {

  country:any=[]
  asias:any=[]
  constructor(public loginservice:LogindetailsService){}

  ngOninit(){
    this.loginservice.getcountries().subscribe((d)=>{
      
     this.country=d
     this.asias=this.country.filter((a: { region: string; })=>a.region ==="Asia")

     console.log(this.asias)

})
  
  }

  


}
