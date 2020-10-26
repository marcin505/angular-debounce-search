import { TestBed } from '@angular/core/testing';

import { HeroesStoreService } from './heroes-store.service';

describe('HeroesStoreService', () => {
  let service: HeroesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
