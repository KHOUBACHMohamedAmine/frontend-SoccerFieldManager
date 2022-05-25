import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/client";
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiUrl = "http://localhost:8090/api/v1/reservations/"
  constructor(private http:HttpClient) {}
  findAll(){
    return this.http.get<Reservation[]>(this.apiUrl);
  }

  insert(reservation){
    return this.http.post(this.apiUrl,reservation);
  }
}
