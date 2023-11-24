import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, tap, throwError} from "rxjs";
import {UserModel} from "../models/user";
import {NavbarComponent} from "../navbar/navbar/navbar.component";
import {Client} from "../models/client";




@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  apiUrl = "http://localhost:8090/authenticate"
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = " UserToken";
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  userEmail:string;
  user: UserModel | null;
  client:Client;
  constructor(private http :HttpClient) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
  }
  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }
  authenticate(email: string, password: string,) {
    return this.http.post(this.apiUrl,{email,password}).pipe(
      catchError(this.handleError)
    );
  }
  login(username: string, password: string) {
    return this.authenticate(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
        sessionStorage.setItem("CurrentUserEmail", username);
        this.user = this.getUser(response.token);


      })
    );
  }

  getCurrentClient(email) {
    return this.http.get(`${this.apiUrl}/client/email/${email}`);

  }
  private getUser(token: string): UserModel | null {
    if (!token) {
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage='';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage=error.error.text;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage= error.error.text;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }
}
