import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  tripName: String = 'Boston';
  date: String = '10/23/2025';
  collapsed: boolean = true;
  street: String = '1212 street name';
  city: String = "rochester";
  state: String = "newyork";
  zip: String = "123456";

  toggleCollapse() {
    console.log(this.collapsed)
    this.collapsed = !this.collapsed;
  }
}
