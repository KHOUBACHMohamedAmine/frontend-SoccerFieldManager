import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientEditComponent } from './client-edit/client-edit.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [

    ClientEditComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    ClientEditComponent,
  ]
})
export class ClientModule { }
