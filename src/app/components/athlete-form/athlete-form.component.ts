import { Component, OnInit } from '@angular/core';
import { Athlete } from '../../models/Athlete';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AthleteService } from '../../services/athlete.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-athlete-form',
  templateUrl: './athlete-form.component.html',
  styleUrls: ['./athlete-form.component.css']
})
export class AthleteFormComponent implements OnInit {

  athlete: Athlete;

  sports: string[] = [
  'Golf',
  'Tennis',
  'Cricket',
  'Basketball',
  'Baseball',
  'American Football',
  'Aquatics',
  'Archery',
  'Automobile Racing',
  'Badminton',
  'Beach Volleyball',
  'Bobsleigh',
  'Body Building',
  'Boxing',
  'Cross Country Running',
  'Cross Country Skiing',
  'Curling',
  'Cycling',
  'Darts',
  'Decathlon',
  'Down Hill Skiing',
  'Equestrianism',
  'eSports',
  'Fencing',
  'Field Hockey',
  'Figure Skating',
  'Gymnastics',
  'Ice Hockey',
  'Martial Arts',
  'Mixed Martial Arts',
  'Modern Pentathlon',
  'Motorcycle Racing',
  'Netball',
  'Polo',
  'Racquetball',
  'Rowing',
  'Rugby',
  'Sailing',
  'Softball',
  'Shooting',
  'Skateboarding',
  'Skeet Shooting',
  'Skeleton',
  'Snow Boarding',
  'Soccer (Football)',
  'Squash',
  'Surfing',
  'Swimming',
  'Track and Field',
  ];

  basicInfo: FormGroup;
  personalInfo: FormGroup;
  socialInfo: FormGroup;

  constructor(private formBuilder: FormBuilder, private athleteService: AthleteService, private router: Router) {}

  ngOnInit() {
    this.athlete = new Athlete();

    this.basicInfo = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      sports: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      nationality: new FormControl('', Validators.required),
    });

    this.personalInfo = this.formBuilder.group({
      association: ['', Validators.required],
      team: ['', Validators.required],
      location: ['', Validators.required],
      about: ['', Validators.required],
      married: ['', Validators.required],
      interests: ['', Validators.required],
      charaties: ['', Validators.required],
      pets: ['', Validators.required],
      drinks: ['', Validators.required],
    });

    this.socialInfo = this.formBuilder.group({
      facebook: new FormControl('', Validators.required),
      instagram: new FormControl('', Validators.required),
      snapchat: new FormControl('', Validators.required),
      twitter: new FormControl('', Validators.required),
      youtube: new FormControl('', Validators.required),
      twitch: new FormControl('', Validators.required),
    });
  }

  athleteSummary() {
    console.log(this.athlete);
  }

  submitAthlete() {
    const athlete = this.athlete;
    this.athleteService.submitAthlete(athlete)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['all-athletes']);
        },
        err => {
          console.log(err);
          return;
        });
  }
}
