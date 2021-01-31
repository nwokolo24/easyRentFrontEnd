import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from '../_interfaces/reservation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  reservation: any = [];
  reservationItems: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getReservation();
  }

  getReservation(){
   return this.http.get("https://easyrent-api-prod.cit362.com/reservations").subscribe(response =>{
      this.reservation = response;
      console.log(this.reservation)
    }, error => {
      console.log(error);
    })
  }

}
