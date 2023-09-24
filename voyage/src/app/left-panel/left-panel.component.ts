import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent {
  constructor(private router: Router) { }

  createTrip() {
    this.router.navigate(['/trip-form']);
  }
}
