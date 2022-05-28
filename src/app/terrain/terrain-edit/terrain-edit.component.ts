import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationService} from "../../services/reservation.service";
import {TerrainService} from "../../services/terrain.service";
import {Reservation} from "../../models/reservation";
import {Terrain} from "../../models/terrain";

@Component({
  selector: 'app-terrain-edit',
  templateUrl: './terrain-edit.component.html',
  styleUrls: ['./terrain-edit.component.css']
})
export class TerrainEditComponent implements OnInit {
  terrainForm = new FormGroup({
    reference: new FormControl(''),
    etat: new FormControl(''),
  });
  private id: any;
  private data: any
  private terrain: any;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });}

    constructor(private activeRoute: ActivatedRoute,private terrainService:TerrainService,private _snackBar: MatSnackBar,private router:Router)
    {
    }

    ngOnInit(): void {
      this.id= this.activeRoute.snapshot.params['id'];
      this.getTerrainById(this.id);
    }

    updateTerrain() {
      this.terrainService.update(this.terrainForm.value,this.id).subscribe(res =>{
        console.warn('terrainAfterUpdate', res);
        this.openSnackBar("Terrain Modifié avec succés","fermer");
        setTimeout(() => {
          return this.router.navigateByUrl('terrain-list');
        }, 1000);

      });
    }
  private getTerrainById(id: any) {
    this.terrainService.findTerrainById(id).subscribe(res =>{

      this.data=res;
      this.terrain=this.data;
      this.loadReservation(this.terrain);
      console.log(this.terrain);
    })

  }

  private loadReservation(terrain : Terrain | undefined) {
    this.terrainForm.setValue({reference:terrain?.reference,etat: terrain?.etat});


  }

}
