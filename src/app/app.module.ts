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
import {HomeComponent} from "./client'shomePage/home/home.component";
import {SecurityModule} from "./security/security.module";
import {LoginFormComponent} from "./security/login-form/login-form.component";
import {MatCardModule} from "@angular/material/card";
import {IsAuthenticatedGuard} from "./is-authenticated.guard";
import {AuthInterceptorProvider} from "./auth.interceptor";
import {HasRoleGuard} from "./has-role.guard";
import {ClientsHomePageModule} from "./client\'shomePage/clientsHomePage.module";
import {ClientFormComponent} from "./client'shomePage/client-form/client-form.component";
import {HomeModule} from "./home/home.module";
import {ReservationFormComponent} from "./client'shomePage/reservation-form/reservation-form.component";




const appRoutes : Routes = [
  {path:'',component:HomeComponent},
  { path: 'client-list/client-edit/:id', component: ClientEditComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'} },
  { path: 'client-list', component: ClientsComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'} },
  { path: 'reservation-list', component: ReservationsComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'} },
  { path: 'reservation-list/reservation-edit/:id', component: ReservationEditComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'} },
  { path: 'terrain-list', component: TerrainComponent ,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'}},
  { path: 'terrain-list/terrain-form', component: TerrainFormComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'} },
  { path: 'terrain-list/terrain-edit/:id', component: TerrainEditComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'} },
  { path: 'personnel-list', component: PersonnelListComponent ,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'}},
  { path: 'personnel-list/personnel-form', component: PersonnelFormComponent ,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'}},
  { path: 'personnel-list/personnel-edit/:id', component: PersonnelEditComponent,canActivate:[IsAuthenticatedGuard,HasRoleGuard],data:{role:'admin'} },
  { path: 'home-page', component: HomeComponent },
  { path: 'client/home', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'reserver', component: ReservationFormComponent,canActivate:[IsAuthenticatedGuard] },




];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ReservationsComponent,
    TerrainComponent,
    LoginFormComponent,
  ],
  imports: [
    ClientsHomePageModule,
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
    SecurityModule,
    MatCardModule,
    HomeModule,


  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
