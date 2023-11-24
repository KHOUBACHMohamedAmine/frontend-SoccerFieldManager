import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import {Client} from "../models/client";
import {catchError, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = "http://localhost:8090/api/v1/clients/"
  apiUrl2 = "http://localhost:8090/api/v1/clients/signin"
  apiUrlUser = "http://localhost:8090/signin"



  constructor(private http:HttpClient) {}
  findAll(){
    return this.http.get<Client[]>(`${this.apiUrl}nonArchived`).pipe(
      catchError(this.handleError)
    );
  }
  findClientById(id){
    return this.http.get(`${this.apiUrl}id/${id}`);
  }
  findClientByCin(cin){

        return this.http.get(`${this.apiUrl}cin/${cin}`).pipe(
          catchError(this.handleError)
        );


  }
  delete(idClient){
    return this.http.put(`${this.apiUrl}archive/id/${idClient}`,idClient)
  }
  insert(client){
    return this.http.post(this.apiUrl2,client).pipe(
      catchError(this.handleError)
    );
}
  insertUser(user){
    return this.http.post(this.apiUrlUser,user).pipe(
      catchError(this.handleError)
    );
  }
 update(client,id){
   return this.http.put(`${this.apiUrl}update/id/${id}`,client);
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
