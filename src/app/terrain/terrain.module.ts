import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerrainFormComponent } from './terrain-form/terrain-form.component';
import { TerrainEditComponent } from './terrain-edit/terrain-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from "@angular-material-components/datetime-picker";



@NgModule({
  declarations: [
    TerrainFormComponent,
    TerrainEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class TerrainModule { }
