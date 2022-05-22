import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/client";
import {filter, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = "http://localhost:8090/api/v1/clients/"
  private clients: Client[] | undefined;

  constructor(private http:HttpClient) {}
  findAll(){
    return this.http.get<Client[]>(`${this.apiUrl}nonArchived`);
  }
  delete(idClient){
    return this.http.put(`${this.apiUrl}archive/id/${idClient}`,idClient)
  }
  persist(client){
    return this.http.post(this.apiUrl,client);
}
}
