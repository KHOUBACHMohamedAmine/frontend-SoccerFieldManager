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
    return this.http.get<Reservation[]>(`${this.apiUrl}nonArchived`);
  }

  insert(reservation){
    return this.http.post(this.apiUrl,reservation);
  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}delete/${id}`,id)

  }

  findReservationById(id) {
    return this.http.get(`${this.apiUrl}id/${id}`,id)

  }

  update( reservation, id) {
    return this.http.put(`${this.apiUrl}update/id/${id}`,reservation)

  }

  confirm(reservation) {
    return this.http.put(`${this.apiUrl}confirm`,reservation)
  }

  add(reservation) {
    return this.http.post(this.apiUrl,reservation);

  }
}
