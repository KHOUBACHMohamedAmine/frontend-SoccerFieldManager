import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
id :any;
clients: Client[] =[];
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



  insertClient(client){
    this.clientService.insert(client)
  }
}
