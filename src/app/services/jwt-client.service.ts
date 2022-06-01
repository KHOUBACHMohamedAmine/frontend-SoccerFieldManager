import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, tap} from "rxjs";
import {UserModel} from "../models/user";
import {NavbarComponent} from "../navbar/navbar/navbar.component";




@Injectable({
  providedIn: 'root'
})
export class JwtClientService {
  apiUrl = "http://localhost:8090/authenticate"
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = " UserToken";
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user: UserModel | null;
  constructor(private http :HttpClient) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
  }
  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }
  authenticate(email: string, password: string,) {
    return this.http.post(this.apiUrl,{email,password});
  }
  login(username: string, password: string) {
    return this.authenticate(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
        this.user = this.getUser(response.token);

      })
    );
  }
  private getUser(token: string): UserModel | null {
    if (!token) {
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }
}
