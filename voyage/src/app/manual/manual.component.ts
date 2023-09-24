import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { TripService } from '../../trip.service';
import { v4 as uuidv4 } from 'uuid';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit {
  tripForm!: FormGroup;
  private = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripService
  ) {}

  ngOnInit(): void {
    this.tripForm = this.formBuilder.group({
      id: [uuidv4()], // Generate a unique ID for each trip
      name: ['', Validators.required],
      location: ['', Validators.required],
      budget: [0, [Validators.required, Validators.min(0)]],
      private: [false],
      activities: [Array<Activity>]
    });
  }

  onSubmit() {
    if (this.tripForm.valid) {
      const tripData: Trip = this.tripForm.value as Trip;
      this.tripService.saveTrip(tripData).subscribe(
        (savedTrip) => {
          console.log('Trip saved successfully: ', savedTrip);
  
          // Pass the saved Trip ID as a query parameter to the activity-form component
          this.router.navigate(['/activity-form'], {
            queryParams: { tripId: savedTrip.id }
          });
        },
        (error) => {
          console.error('Error saving trip:', error);
        }
      );
    }
  }
}
