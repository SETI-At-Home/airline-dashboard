import { Component } from '@angular/core';

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
    <h3>Airline passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
          <span 
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in date: {{ passenger.checkedIn ?(passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in!'}}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
          </div>
      </li>
    </ul>
    </div>
  `,
})
export class PassengerDashboardComponent {
  passengers: Passenger[] = [
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
