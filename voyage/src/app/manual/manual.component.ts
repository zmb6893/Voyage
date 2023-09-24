import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trip } from '../../models/trip.model';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit{
  tripForm!: FormGroup;
  private = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.tripForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      budget: [0, [Validators.required, Validators.min(0)]],
      private: [false]
    });
  }

  onSubmit() {
    if (this.tripForm.valid) {
      const tripData: Trip = this.tripForm.value as Trip;
      console.log(tripData);
    }

    this.router.navigate(['/activity-form']);
    //this.router.navigate(['/choose-plan']);
  }

  onStartDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.tripForm.get('startDate')?.setValue(event.value);
  }
  
  onEndDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.tripForm.get('endDate')?.setValue(event.value);
  }
  

}
