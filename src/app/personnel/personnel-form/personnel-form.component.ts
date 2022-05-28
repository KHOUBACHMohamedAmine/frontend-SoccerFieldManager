import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Client} from "../../models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PersonnelService} from "../../services/personnel.service";

@Component({
  selector: 'app-personnel-form',
  templateUrl: './personnel-form.component.html',
  styleUrls: ['./personnel-form.component.css']
})
export class PersonnelFormComponent implements OnInit {
  personnelForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    poste: new FormControl(''),
    cin: new FormControl(''),
    sexe: new FormControl(''),
    numtel: new FormControl(''),
  });
  id:any;
  data:any;
  client: Client | undefined;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }
  constructor(private activeRoute: ActivatedRoute,private personnelService:PersonnelService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }

  ajouterPersonnel() {
    this.personnelService.add(this.personnelForm.value).subscribe(res =>{
      console.warn('Employé ajouté :', res);
      this.openSnackBar("Employé Ajouté Avec Succés","fermer");
      setTimeout(() => {
        return this.router.navigateByUrl('personnel-list');
      }, 1000);

    });
  }
}
