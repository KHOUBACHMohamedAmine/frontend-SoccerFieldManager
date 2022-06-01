import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../services/jwt-client.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
isAuthenticated:boolean;


  constructor(public service:JwtClientService) { }

  ngOnInit(): void {
    if (this.service.user!=null){
      this.isAuthenticated=true;
      console.log(this.isAuthenticated);
    }else{
      this.isAuthenticated=false;
      console.log(this.isAuthenticated);
    }
  }

}
