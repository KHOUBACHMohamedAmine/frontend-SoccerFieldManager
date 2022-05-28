import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { PersonnelFormComponent } from './personnel-form/personnel-form.component';
import { PersonnelEditComponent } from './personnel-edit/personnel-edit.component';
import {Router, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PersonnelListComponent,
    PersonnelFormComponent,
    PersonnelEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PersonnelModule { }
