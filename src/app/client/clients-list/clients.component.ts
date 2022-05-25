import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/client";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
id :any;
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

  insertClient(client){
    this.clientService.insert(client)
  }
}
