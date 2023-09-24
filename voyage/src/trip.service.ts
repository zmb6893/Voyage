import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Trip } from './models/trip.model';
import { throwError } from 'rxjs';

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
