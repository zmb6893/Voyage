import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent {
  name: String = 'name';
  description: String = 'description';
  time: String = 'time';
  otherNotes: String = 'othernotes';
  collapsed: boolean = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
