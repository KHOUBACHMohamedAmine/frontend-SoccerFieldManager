import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
id :any;
clients: Client[] =[];

  constructor(private clientService:ClientService, private router: Router, private activeRoute: ActivatedRoute) { }

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
      this.getClients();
    })
}
redirectToForm(id: number){
    this.router.navigate(['client-edit',id],{relativeTo: this.activeRoute});
}

  insertClient(client){
    this.clientService.insert(client)
  }
}
