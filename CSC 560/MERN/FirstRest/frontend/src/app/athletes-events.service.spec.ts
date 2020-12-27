import { TestBed } from '@angular/core/testing';

import { AthletesEventsService } from './athletes-events.service';

describe('AthletesEventsService', () => {
  let service: AthletesEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AthletesEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
