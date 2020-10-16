import { TestBed } from '@angular/core/testing';

import { ObservablePlaygroundService } from './observable-playground.service';

describe('ObservablePlaygroundService', () => {
  let service: ObservablePlaygroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablePlaygroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
