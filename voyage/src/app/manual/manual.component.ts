import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { TripService } from '../../trip.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit{
  tripForm!: FormGroup;
  private = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private tripService: TripService) {}

  ngOnInit(): void {
    this.tripForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      budget: [0, [Validators.required, Validators.min(0)]],
      private: [false]
    });
  }

  onSubmit() {
    if (this.tripForm.valid) {
      const tripData: Trip = this.tripForm.value as Trip;
      this.tripService.saveTrip(tripData).subscribe(
        () => {
          console.log('Trip saved successfully: ', tripData);
        },
        (error) => {
          console.error('Error saving trip:', error);
        }
      );
    }

    this.router.navigate(['/activity-form']);
  }

}
