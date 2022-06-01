import { Component } from '@angular/core';
import {JwtClientService} from "./services/jwt-client.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-SoccerFieldManager';
  public roles: string[];

constructor(public authService:JwtClientService) {
}


 ngOnInit() {
  if (this.authService.user?.roles){
    console.log('user role',this.authService.user.roles);
  }
  else {
    console.log('no admin role founded');
  }
 }

 }






