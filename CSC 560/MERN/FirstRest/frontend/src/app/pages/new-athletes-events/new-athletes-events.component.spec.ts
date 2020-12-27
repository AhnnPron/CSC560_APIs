import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAthletesEventsComponent } from './new-athletes-events.component';

describe('NewAthletesEventsComponent', () => {
  let component: NewAthletesEventsComponent;
  let fixture: ComponentFixture<NewAthletesEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAthletesEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAthletesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
