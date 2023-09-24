import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Trip } from './models/trip.model';

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
