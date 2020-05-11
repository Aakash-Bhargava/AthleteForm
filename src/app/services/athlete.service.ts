import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Athlete } from '../models/Athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  private submitAthleteUrl = 'http://localhost:3000/api/submitAthlete';
  private getAllAthleteUrl = 'http://localhost:3000/api/getAthletes';
  constructor(private http: HttpClient) {}

  submitAthlete(athlete: Athlete) {
    return this.http.post<Athlete>(this.submitAthleteUrl, athlete);
  }

  getAllAthletes() {
    return this.http.get<Athlete[]>(this.getAllAthleteUrl);
  }
}
