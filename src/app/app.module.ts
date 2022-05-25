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
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';




const appRoutes : Routes = [
  {path:'',component:ClientsComponent},
  { path: 'client-edit/:id', component: ClientEditComponent }


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

      ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
      RouterModule.forRoot(appRoutes,{enableTracing:true}),
      BrowserAnimationsModule,
      NbThemeModule.forRoot({ name: 'default' }),
      NbLayoutModule,
      NbEvaIconsModule


    ],
  providers: [

    ClientEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
