import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'src/models/activity.model';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../../trip.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {
  activityForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tripService: TripService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var tripId;
    this.route.queryParams.subscribe((queryParams) => {
      tripId = queryParams['tripId'];
  
      // You can use tripId to associate the new Activity with the Trip
    });
  
    this.activityForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      location: [null, Validators.required],
      time: [null, Validators.required],
      tripId: tripId

    });
  }

  onSubmit() {
    console.log("SUBMITTED", this.activityForm);
    const activityData: Activity = this.activityForm.value as Activity;
    this.tripService.addActivity(activityData, activityData.tripId);
      // this.tripService.getTripById(activityData.tripId);
    this.router.navigate(['/home'])
  }  
}
