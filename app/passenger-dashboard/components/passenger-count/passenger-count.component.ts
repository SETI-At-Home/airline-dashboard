import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <h3>Airline Passengers</h3>
    <div>
      Total checked in: {{ checkInCount() }} / {{ items.length}}
    </div>
  `,
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  checkInCount(): number {
    if (!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}
