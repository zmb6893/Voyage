import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Trip } from './models/trip.model';
import { throwError } from 'rxjs';
import { Activity } from './models/activity.model';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private trips: Trip[] = []; // Store trips in memory

  constructor(private http: HttpClient) {}

  // Save a trip to the in-memory array
  saveTrip(trip: Trip): Observable<Trip> {
    this.trips.push(trip);
    return of(trip);
  }

  updateTrip(updatedTrip: Trip): Observable<Trip> {
    const index = this.trips.findIndex(trip => trip.id === updatedTrip.id);
    if (index !== -1) {
      this.trips[index] = updatedTrip;
      return of(updatedTrip);
    } else {
      return throwError('Trip not found');
    }
  }

  addActivity(activity: Activity, tripId: string) {
    const trip = this.getTripById(tripId);
  
    trip.subscribe((trip) => {
      if (trip) {
        // Check if activities is an array or initialize it as an empty array
        if (!Array.isArray(trip.activities)) {
          trip.activities = [];
        }
        trip.activities.push(activity);
        console.log('Updated Trip:', trip);
      } else {
        console.error('Trip not found');
      }
    });
  }
  
  

  getTripById(id: string): Observable<Trip | undefined> {
    const trip = this.trips.find((t) => t.id === id);

    if (trip) {
      return of(trip);
    } else {
      return throwError('Trip not found');
    }
  }

  // Get all trips from the in-memory array (replace with HTTP call to a server)
  getAllTrips(): Observable<Trip[]> {
    return of(this.trips);
  }

  // Handle HTTP errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
