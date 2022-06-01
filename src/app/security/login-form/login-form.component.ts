import { Component, OnInit } from '@angular/core';
import {JwtClientService} from "../../services/jwt-client.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form=new FormGroup({
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
  });


  constructor(private service:JwtClientService,private router: Router) { }

  ngOnInit(): void {

  }
  submitForm() {
    if (this.form.invalid) {
      return alert("veuillez remplir les champs correctement !!");
    }

    this.service
      .login(this.form.get('email')?.value, this.form.get('password')?.value)
      .subscribe((response) => {
        console.log(this.form.get('email')?.value);
        console.log(this.form.get('password')?.value);

        this.router.navigate(['/client/home']);

      });
  }

}
