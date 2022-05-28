import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reservation} from "../models/reservation";
import {Employee} from "../models/employee";

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
}
