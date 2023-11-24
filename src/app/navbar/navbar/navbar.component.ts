import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../services/jwt-client.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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

  Deconnect(){
    localStorage.clear();
    sessionStorage.clear();
    location.replace('/client/home');
  }

}
