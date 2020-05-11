import { Component, OnInit } from '@angular/core';
import { Athlete } from 'src/app/models/Athlete';
import { Router } from '@angular/router';
import { AthleteService } from '../../services/athlete.service';

@Component({
  selector: 'app-all-athletes',
  templateUrl: './all-athletes.component.html',
  styleUrls: ['./all-athletes.component.css']
})
export class AllAthletesComponent implements OnInit {

  athletes: Athlete[];
  constructor(private router: Router, private athleteService: AthleteService) { }

  ngOnInit() {
     this.athleteService.getAllAthletes().subscribe(
      res => {
        this.athletes = res;
      },
      err => console.log('Error: ', err)
    );
  }

  backToSignUp() {
    this.router.navigate(['']);
  }
}
