import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Client} from "../../models/client";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonnelService} from "../../services/personnel.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Employee} from "../../models/employee";

@Component({
  selector: 'app-personnel-edit',
  templateUrl: './personnel-edit.component.html',
  styleUrls: ['./personnel-edit.component.css']
})
export class PersonnelEditComponent implements OnInit {
  personnelForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    poste: new FormControl(''),
    cin: new FormControl(''),
    sexe: new FormControl(''),
    numtel: new FormControl(''),
    salaire: new FormControl(''),
  });
  id:any;
  data:any;
  employee: Employee | undefined;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }


  constructor(private activeRoute: ActivatedRoute,private personnelService:PersonnelService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.id= this.activeRoute.snapshot.params['id'];
    this.getEmployeeById(this.id);
  }

  getEmployeeById(id){
    this.personnelService.findEmployeeById(id).subscribe(res =>{
      this.data=res;
      this.employee=this.data;
      this.loadEmployee(this.employee);
      console.log(this.employee);
    })
  }

  loadEmployee(employee: Employee | undefined){
    this.personnelForm.setValue({nom:employee?.nom, prenom: employee?.prenom,poste:employee?.poste,cin:employee?.cin,salaire:employee?.salaire,sexe:employee?.sexe,numtel:employee?.numtel});
  }

  updateEmployee() {
    this.personnelService.update(this.personnelForm.value,this.id).subscribe(res =>{
      console.warn('employeeAfterUpdate', res);
      this.openSnackBar("Employé Modifié avec succes","fermer");
      setTimeout(() => {
        return this.router.navigateByUrl('personnel-list');
      }, 1000);

    });
  }
}
