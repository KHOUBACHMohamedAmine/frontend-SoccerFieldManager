import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

clients: Client[] =[];
  constructor(private clientService:ClientService) { }

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
  deleteClient(idClient){

    this.clientService.delete(idClient).subscribe((client)=>{
      this.getClients();
    })
}
  persistClient(client){
    this.clientService.persist(client)
  }
}
