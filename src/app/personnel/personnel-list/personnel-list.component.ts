import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../models/employee";
import {PersonnelService} from "../../services/personnel.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.css']
})
export class PersonnelListComponent implements OnInit {
  id :any;
  employees: Employee[] =[];
  cin=new FormGroup({
    val: new FormControl('',[Validators.required,Validators.pattern('\\w\\w\\d\\d\\d\\d\\d')]),
  })
  private data: any;
  errorMsg:string;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }

  constructor(private personnelService:PersonnelService,private _snackBar: MatSnackBar, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEmployees();


  }
  getPersonnelByCin(){
    this.personnelService.findPersonnelByCin(this.cin.get('val')?.value).subscribe(res=>{

      this.data=res;
      this.employees=this.data;


    },error => {
      this.errorMsg=error;
    })
  }


  getEmployeeById(id){
    this.personnelService.findEmployeeById(id).subscribe(res =>{
      console.log(res);
    })
  }
  deleteEmployee(id){

    this.personnelService.delete(id).subscribe((employee)=>{
      this.openSnackBar("Employé Supprimé avec succés","fermer");
      this.getEmployees();

    })
  }



  getEmployees() {
    this.personnelService.findAll()
      .subscribe(

        employees => {
          this.employees=employees;
        })
  }



}
