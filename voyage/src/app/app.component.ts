import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voyage'; 
  constructor(private router: Router) { }

  createTrip() {
    this.router.navigate(['/trip-form']);
  }
}
