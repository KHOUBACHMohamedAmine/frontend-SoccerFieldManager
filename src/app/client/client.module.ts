import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import {NbCardModule, NbCheckboxModule, NbSelectModule} from "@nebular/theme";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClientFormComponent,
    ClientEditComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbSelectModule,
    NbCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ClientEditComponent,
  ]
})
export class ClientModule { }
