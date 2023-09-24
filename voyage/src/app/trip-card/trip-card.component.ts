import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  tripName: String = 'Something';
  date: String = 'Something';
  collapsed: boolean = true;
  street: String = 'street';
  city: String = "city";
  state: String = "state";
  zip: String = "zipcode";
}
