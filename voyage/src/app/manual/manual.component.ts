import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Trip } from '../../models/trip.model';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.css']
})
export class ManualComponent implements OnInit{
  tripForm!: FormGroup;
  private = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.tripForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: [{name: '', zipcode: '', address: '', website: '', hours: ''}, Validators.required],
      budget: [0, [Validators.required, Validators.min(0)]],
      private: [false]
    });
  }

  onSubmit() {
    if (this.tripForm.valid) {
      const tripData: Trip = this.tripForm.value as Trip;
      console.log(tripData);
    }
  }

}
