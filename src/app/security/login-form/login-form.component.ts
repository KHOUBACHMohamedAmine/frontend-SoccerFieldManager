import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../services/jwt-client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Client} from "../../models/client";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
   currentClient:Client;
  form=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  });
  private data: any;
  private email: string;
  private msg:string;
  private usr:Client;
  private civilite: string;
  errorMsg: string;


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }
  constructor(private service:JwtClientService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }
  submitForm() {
    if (this.form.invalid) {
      return alert("veuillez remplir les champs correctement !!");
    }

    this.service.login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe((response) => {
        console.log(this.form.get('email')?.value);
        console.log(this.form.get('password')?.value);
        this.service.getCurrentClient(this.form.get('email')?.value).subscribe(res =>{
          this.data=res;
          this.currentClient=this.data;
          console.log(this.currentClient);
          this.msg="bienvenue : "  +this.currentClient.nom+"  "+this.currentClient.prenom;
          console.log(this.msg);
          this.openSnackBar(this.msg,"fermer");
        setTimeout(() => {
          return this.router.navigateByUrl('');
        });
      });
  },error => {
        this.errorMsg=error;
        location.replace('login')
      });

}
}
