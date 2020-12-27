import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAthletesNamesComponent } from './edit-athletes-names.component';

describe('EditAthletesNamesComponent', () => {
  let component: EditAthletesNamesComponent;
  let fixture: ComponentFixture<EditAthletesNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAthletesNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAthletesNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
