import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../models/client";
import {Reservation} from "../models/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) {}
  findAll(){
    return this.http.get<Reservation[]>("http://localhost:8090/api/v1/reservations/");
  }
}
