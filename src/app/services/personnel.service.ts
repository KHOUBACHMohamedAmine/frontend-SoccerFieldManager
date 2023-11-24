import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Reservation} from "../models/reservation";
import {Employee} from "../models/employee";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  apiUrl = "http://localhost:8090/api/v1/employees/"
  constructor(private http:HttpClient) {}

  findAll() {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  findEmployeeById(id) {
    return this.http.get(`${this.apiUrl}id/${id}`)

  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}delete/${id}`)

  }

  add(personnel) {
    return this.http.post(this.apiUrl,personnel);
  }

  update(employee, id) {
    return this.http.put(`${this.apiUrl}update/id/${id}`,employee)
  }

  findPersonnelByCin(cin){

    return this.http.get(`${this.apiUrl}cin/${cin}`).pipe(
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
