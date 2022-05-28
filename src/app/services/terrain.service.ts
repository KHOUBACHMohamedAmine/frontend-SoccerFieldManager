import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Terrain} from "../models/terrain";

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  apiUrl="http://localhost:8090/api/v1/terrains/";
  constructor(private http:HttpClient) {}
  findAll(){
    return this.http.get<Terrain[]>(this.apiUrl);
  }

  update(terrain, id) {
    return this.http.put(`${this.apiUrl}update/id/${id}`,terrain);

  }

  findTerrainById(id) {
    return this.http.get(`${this.apiUrl}id/${id}`);


  }

  delete(id) {
    return this.http.delete(`${this.apiUrl}delete/id/${id}`);

  }

  add(terrain) {
    return this.http.post(this.apiUrl,terrain);

  }
}
