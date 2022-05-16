import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = "http://localhost:8090/api/v1/clients/"

  constructor(private http:HttpClient) {}
  findAll(){
    return this.http.get<Client[]>(this.apiUrl);
  }
  delete(idClient){
    return this.http.delete(`${this.apiUrl}delete/${idClient}`)
  }
  persist(client){
    return this.http.post(this.apiUrl,client);
}
}
