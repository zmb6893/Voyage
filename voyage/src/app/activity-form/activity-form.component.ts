import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'src/models/activity.model';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {
  activityForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      location: [null, Validators.required],
      time: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.activityForm.valid) {
      const activityData: Activity = this.activityForm.value as Activity;
      console.log(activityData);
    }
  }

  onTimeChange(event: MatDatepickerInputEvent<Date>): void {
    this.activityForm.get('time')?.setValue(event.value);
  }
}
