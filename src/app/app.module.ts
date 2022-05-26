import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ClientsComponent } from './client/clients-list/clients.component';
import { ReservationsComponent } from './reservation/reservations-list/reservations.component';
import {HttpClientModule} from "@angular/common/http";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import { TerrainComponent } from './terrain/terrain-list/terrain.component';
import {RouterModule,Routes} from "@angular/router";
import {ClientEditComponent} from "./client/client-edit/client-edit.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbTabsetModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {PersonnelListComponent} from "./personnel/personnel-list/personnel-list.component";
import {HomePageComponent} from "./home/home-page/home-page.component";
import {ClientModule} from "./client/client.module";




const appRoutes : Routes = [

  { path: 'client-list/client-edit/:id', component: ClientEditComponent },
  { path: 'client-list', component: ClientsComponent },
  { path: 'reservation-list', component: ReservationsComponent },
  { path: 'terrain-list', component: TerrainComponent },
  { path: 'personnel-list', component: PersonnelListComponent },
  { path: 'home-page', component: HomePageComponent },



];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    ReservationsComponent,
    TerrainComponent

  ],
  imports: [
ClientModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,


  ],
  providers: [

    ClientEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
