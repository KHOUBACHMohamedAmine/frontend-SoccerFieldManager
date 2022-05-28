import { Component, OnInit } from '@angular/core';
import {Terrain} from "../../models/terrain";
import {TerrainService} from "../../services/terrain.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-terrain',
  styleUrls: ['./terrain.component.css'],
  templateUrl: './terrain.component.html'
})
export class TerrainComponent implements OnInit {
  terrains: Terrain[] =[];
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }
  constructor(private terrainService:TerrainService,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.getTerrains();
  }
  getTerrains(){
    this.terrainService.findAll()
      .subscribe(terrains => this.terrains=terrains)
  }

  deleteTerrain(id) {
    this.terrainService.delete(id).subscribe((terrain)=>{
      this.openSnackBar("Terrain Supprimé avec succés","fermer");
      this.getTerrains();

    })

  }
}
