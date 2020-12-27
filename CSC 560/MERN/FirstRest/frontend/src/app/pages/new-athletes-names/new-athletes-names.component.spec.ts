import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAthletesNamesComponent } from './new-athletes-names.component';

describe('NewAthletesNamesComponent', () => {
  let component: NewAthletesNamesComponent;
  let fixture: ComponentFixture<NewAthletesNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAthletesNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAthletesNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
