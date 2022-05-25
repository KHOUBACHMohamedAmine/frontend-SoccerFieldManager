import { Component, OnInit } from '@angular/core';
import {Terrain} from "../../models/terrain";
import {TerrainService} from "../../services/terrain.service";

@Component({
  selector: 'app-terrain',
  styleUrls: ['./terrain.component.css'],
  templateUrl: './terrain.component.html'
})
export class TerrainComponent implements OnInit {
  terrains: Terrain[] =[];
  constructor(private terrainService:TerrainService) { }


  ngOnInit() {
    this.getTerrains();
  }
  getTerrains(){
    this.terrainService.findAll()
      .subscribe(terrains => this.terrains=terrains)
  }

}
