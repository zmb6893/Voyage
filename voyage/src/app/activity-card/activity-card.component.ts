import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent {
  name: String = 'sunken garden';
  description: String = 'visit the sunken gardens and castle';
  time: String = '2:00pm';
  otherNotes: String = 'fun stuff';
  collapsed: boolean = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
