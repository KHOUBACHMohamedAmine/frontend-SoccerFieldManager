import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { PersonnelFormComponent } from './personnel-form/personnel-form.component';



@NgModule({
  declarations: [
    PersonnelComponent,
    PersonnelListComponent,
    PersonnelFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonnelModule { }
