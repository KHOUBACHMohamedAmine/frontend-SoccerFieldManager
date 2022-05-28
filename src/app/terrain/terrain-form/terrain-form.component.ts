import { Component, OnInit } from '@angular/core';
import {TerrainService} from "../../services/terrain.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-terrain-form',
  templateUrl: './terrain-form.component.html',
  styleUrls: ['./terrain-form.component.css']
})
export class TerrainFormComponent implements OnInit {
  terrainForm = new FormGroup({
    reference: new FormControl(''),
    etat: new FormControl(''),
  });


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });}
  constructor(private activeRoute: ActivatedRoute,private terrainService:TerrainService,private _snackBar: MatSnackBar,private router:Router) {}

  ngOnInit(): void {
  }

  ajouterTerrain() {
    this.terrainService.add(this.terrainForm.value).subscribe(res =>{
      console.warn('terrain ajouté :', res);
      this.openSnackBar("Terrain Ajouté Avec Succés","fermer");
      setTimeout(() => {
        return this.router.navigateByUrl('terrain-list');
      }, 1000);

    });
  }
}
