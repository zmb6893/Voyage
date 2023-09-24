import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
}
