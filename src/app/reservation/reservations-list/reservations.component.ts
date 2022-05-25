import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../models/reservation";
import {ReservationService} from "../../services/reservation.service";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[] =[];
  constructor(private reservationService:ReservationService) { }


  ngOnInit() {
    this.getReservations();
  }
  /*reservationIsconfirmed(){
    if (.status==0){
      return "En Attente";
    }else if (this.reservations[].status==1){
      return "Confirmée";
    }
  }*/
  getReservations(){
    this.reservationService.findAll()
      .subscribe(reservations => this.reservations=reservations)
  }
}
