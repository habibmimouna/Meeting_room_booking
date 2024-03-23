import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseURL = 'http://localhost:5000/auth/';
  constructor() { }
}
