import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Client} from "../models/client";
import {Reservation} from "../models/reservation";
import {catchError, throwError} from "rxjs";

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

  findReservationByDate(date) {
    return this.http.get<Reservation[]>(`${this.apiUrl}date/${date}`).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage='';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage=error.error;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage= error.error;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }
}
