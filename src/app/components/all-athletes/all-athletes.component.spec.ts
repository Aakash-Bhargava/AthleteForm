import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAthletesComponent } from './all-athletes.component';

describe('AllAthletesComponent', () => {
  let component: AllAthletesComponent;
  let fixture: ComponentFixture<AllAthletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAthletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
