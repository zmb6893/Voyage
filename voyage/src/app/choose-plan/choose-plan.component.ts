import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.css']
})
export class ChoosePlanComponent {
  constructor(private router: Router) { }

  createManualTrip() {
    this.router.navigate(['/trip-form']);
  }
}
