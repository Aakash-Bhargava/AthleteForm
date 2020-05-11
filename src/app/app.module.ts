import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AthleteFormComponent } from './components/athlete-form/athlete-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AthleteService } from './services/athlete.service';
import { RouterModule, Routes } from '@angular/router';

// material components
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AllAthletesComponent } from './components/all-athletes/all-athletes.component';


const appRoutes: Routes = [
  { path: '', component: AthleteFormComponent },
  { path: 'all-athletes', component: AllAthletesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AthleteFormComponent,
    AllAthletesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [AthleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
