import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {ClientC} from "../../models/ClientC";




@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
id:any;
data:any;
client=new ClientC();





  constructor(private route: ActivatedRoute,private clientService:ClientService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getClientById(this.id);

  }
  getClientById(id){
    this.clientService.findClientById(id).subscribe(res =>{

      this.data=res;
      this.client=this.data;
      console.log(this.client);
    })
  }

  updateClient() {
this.clientService.update(this.client,this.id).subscribe(res =>{

});
  }
}
