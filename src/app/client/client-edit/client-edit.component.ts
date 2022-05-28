import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Client} from "../../models/client";
import {MatSnackBar} from "@angular/material/snack-bar";
import {relative} from "@angular/compiler-cli";




@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  clientForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    numapogee: new FormControl(''),
    cin: new FormControl(''),
    etablissement: new FormControl(''),
    sexe: new FormControl(''),
    numtel: new FormControl(''),
  });
id:any;
data:any;
client: Client | undefined;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }






  constructor(private activeRoute: ActivatedRoute,private clientService:ClientService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.id= this.activeRoute.snapshot.params['id'];
    this.getClientById(this.id);

  }
  getClientById(id){
    this.clientService.findClientById(id).subscribe(res =>{

      this.data=res;
      this.client=this.data;
      this.loadClient(this.client);
      console.log(this.client);
    })
  }

  loadClient(client: Client | undefined){
    this.clientForm.setValue({nom:client?.nom, prenom: client?.prenom,numapogee:client?.numapogee,cin:client?.cin,etablissement:client?.etablissement,sexe:client?.sexe,numtel:client?.numtel});
  }

  updateClient() {
this.clientService.update(this.clientForm.value,this.id).subscribe(res =>{
  console.warn('clientAfterUpdate', res);
  this.openSnackBar("Client Modifié avec succes","fermer");
  setTimeout(() => {
    return this.router.navigateByUrl('client-list');
  }, 1000);

});
  }
}
