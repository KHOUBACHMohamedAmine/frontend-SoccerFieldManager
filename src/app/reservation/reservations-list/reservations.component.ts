import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../models/reservation";
import {ReservationService} from "../../services/reservation.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  errorMsg: string;
  reservations: Reservation[] =[];
  date=new FormGroup({
    val: new FormControl('',Validators.required),
  })
  openSnackBar(message: string, action: string , ) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }
  constructor(private reservationService:ReservationService,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.getReservations();
  }

  getReservations(){
    this.reservationService.findAll()
      .subscribe(reservations => this.reservations=reservations)
  }

  deleteReservation(id) {
    this.reservationService.delete(id).subscribe(()=>{
      console.log("deleted",id)
      this.openSnackBar("Réservation Supprimée avec succés","fermer");

      this.getReservations();
    })


  }

  confirmReservation(reservation : Reservation) {
    this.reservationService.confirm(reservation).subscribe(()=>{
      console.log("Confirmed",reservation.id)
      this.openSnackBar("Réservation Confirmée avec succés","fermer");
      this.getReservations();
    })


  }

  getReservationByDate() {
if(!this.date.get('val')?.value){
  this.errorMsg="Veulliez Spécifiez Une Valeur D'abord !!"
  location.replace('reservation-list');


}
   else {this.reservationService.findReservationByDate(this.date.get('val')?.value).subscribe(res=>{

      this.reservations=res;


    },error => {
      this.errorMsg=error;
    })
}
  }
}
