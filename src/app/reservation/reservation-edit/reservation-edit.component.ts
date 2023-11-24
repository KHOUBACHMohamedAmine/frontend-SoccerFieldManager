import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {MatSnackBar} from "@angular/material/snack-bar";
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../models/reservation";

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.css']
})
export class ReservationEditComponent implements OnInit {
  reservationForm = new FormGroup({
    reference: new FormControl(''),
    date: new FormControl(''),
    hour: new FormControl(''),
  });
  private id: any;
  private data: any
  private reservation: any;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action , {
      duration: 3000
    });
  }




  constructor(private activeRoute: ActivatedRoute,private reservationService:ReservationService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.id= this.activeRoute.snapshot.params['id'];
    this.getReservationById(this.id);
  }

  updateReservation() {
    this.reservationService.update(this.reservationForm.value,this.id).subscribe(res =>{
      console.warn('reservationAfterUpdate', res);
      this.openSnackBar("Reservation Modifiée avec succés","fermer");
      setTimeout(() => {
        return this.router.navigateByUrl('reservation-list');
      }, 1000);

    });
  }

  private getReservationById(id: any) {
    this.reservationService.findReservationById(id).subscribe(res =>{

      this.data=res;
      this.reservation=this.data;
      this.loadReservation(this.reservation);
      console.log(this.reservation);
    })

  }

  private loadReservation(reservation : Reservation | undefined) {
    this.reservationForm.setValue({reference:reservation?.reference,date: reservation?.date,hour:reservation?.hour});


  }
}
