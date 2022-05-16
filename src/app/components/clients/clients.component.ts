import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  client:Client = {
    nom:'Coming ',
    prenom:'from',
    cin:'front',
    etablissement:'end',
    numtel:'0668396589',
    sexe:'front',
    numapogee:1234


  }
clients: Client[] =[];
  constructor(private clientService:ClientService) { }

  ngOnInit() {
 this.getClients();
  }
  getClients(){
    this.clientService.findAll()
      .subscribe(clients => this.clients=clients)
  }
  deleteClient(idClient){

    this.clientService.delete(idClient).subscribe(()=>{
      this.clients = this.clients.filter(client => client.id !=idClient )
    })
}
  persistClient(client){
    this.clientService.persist(client)
  }
}
