import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
id :any;
cin=new FormGroup({
  val: new FormControl('',[Validators.required,Validators.pattern('\\w\\w\\d\\d\\d\\d\\d')]),
})
clients: Client[];
  private data:any;
  errorMsg: string;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }

  constructor(private clientService:ClientService,private _snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  this.getClients();


  }

  getClients(){

    this.clientService.findAll()
      .subscribe(

        clients => {
          this.clients=clients
        })
  }
  getClientById(id){
    this.clientService.findClientById(id).subscribe(res =>{
      console.log(res);
    })
  }
  deleteClient(idClient){

    this.clientService.delete(idClient).subscribe((client)=>{
      this.openSnackBar("Client Supprimé avec succés","fermer");
      this.getClients();

    })
}
getByCin(){
    this.clientService.findClientByCin(this.cin.get('val')?.value).subscribe(res=>{

        this.data=res;
        this.clients=this.data;


    },error => {
      this.errorMsg=error;
    })
}



  insertClient(client){
    this.clientService.insert(client)
  }
}
