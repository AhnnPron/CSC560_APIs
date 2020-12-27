import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAthletesEventsComponent } from './edit-athletes-events.component';

describe('EditAthletesEventsComponent', () => {
  let component: EditAthletesEventsComponent;
  let fixture: ComponentFixture<EditAthletesEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAthletesEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAthletesEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
