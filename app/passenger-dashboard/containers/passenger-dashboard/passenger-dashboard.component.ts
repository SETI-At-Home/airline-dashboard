import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <div *ngFor="let passenger of passengers">
        {{passenger.fullname}}
      </div>
      <passenger-detail
       *ngFor="let passenger of passengers"
       [detail]="passenger"
       (edit)="handleEdit($event)"
       (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.passengers = [
      {
        id: 1,
        fullname: 'Vladimir',
        checkedIn: true,
        checkedInDate: 149074210000,
        children: null,
      },
      {
        id: 2,
        fullname: 'Pero',
        checkedIn: false,
        checkedInDate: null,
        children: [{ name: 'Jessica', age: 11 }],
      },
      {
        id: 3,
        fullname: 'Nada',
        checkedIn: true,
        checkedInDate: 149074210000,
        children: [{ name: 'Pero', age: 22 }],
      },
      {
        id: 4,
        fullname: 'Goran',
        checkedIn: false,
        checkedInDate: null,
        children: null,
      },
    ];
  }
  handleEdit(event) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}
