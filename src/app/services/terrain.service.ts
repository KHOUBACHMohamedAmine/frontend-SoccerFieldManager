import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Terrain} from "../models/terrain";

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  constructor(private http:HttpClient) {}
  findAll(){
    return this.http.get<Terrain[]>("http://localhost:8090/api/v1/terrains/");
  }
}
