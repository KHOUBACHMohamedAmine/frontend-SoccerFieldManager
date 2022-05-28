import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ClientsComponent } from './client/clients-list/clients.component';
import { ReservationsComponent } from './reservation/reservations-list/reservations.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TerrainComponent } from './terrain/terrain-list/terrain.component';
import {RouterModule,Routes} from "@angular/router";
import {ClientEditComponent} from "./client/client-edit/client-edit.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PersonnelListComponent} from "./personnel/personnel-list/personnel-list.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {ClientModule} from "./client/client.module";
import {ReservationEditComponent} from "./reservation/reservation-edit/reservation-edit.component";
import {ReservationModule} from "./reservation/reservation.module";
import {TerrainModule} from "./terrain/terrain.module";
import {PersonnelModule} from "./personnel/personnel.module";
import {TerrainEditComponent} from "./terrain/terrain-edit/terrain-edit.component";
import {TerrainFormComponent} from "./terrain/terrain-form/terrain-form.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule} from '@angular-material-components/datetime-picker';
import {PersonnelFormComponent} from "./personnel/personnel-form/personnel-form.component";
import {PersonnelEditComponent} from "./personnel/personnel-edit/personnel-edit.component";




const appRoutes : Routes = [

  { path: 'client-list/client-edit/:id', component: ClientEditComponent },
  { path: 'client-list', component: ClientsComponent },
  { path: 'reservation-list', component: ReservationsComponent },
  { path: 'reservation-list/reservation-edit/:id', component: ReservationEditComponent },
  { path: 'terrain-list', component: TerrainComponent },
  { path: 'terrain-list/terrain-form', component: TerrainFormComponent },
  { path: 'terrain-list/terrain-edit/:id', component: TerrainEditComponent },
  { path: 'personnel-list', component: PersonnelListComponent },
  { path: 'personnel-list/personnel-form', component: PersonnelFormComponent },
  { path: 'personnel-list/personnel-edit/:id', component: PersonnelEditComponent },
  { path: 'home-page', component: HomePageComponent },



];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ReservationsComponent,
    TerrainComponent,
  ],
  imports: [
    RouterModule,
    ClientModule,
    ReservationModule,
    TerrainModule,
    PersonnelModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,


  ],
  providers: [

    ClientEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
