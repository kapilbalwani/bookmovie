import { TestBed } from '@angular/core/testing';

import { MovieResolveService } from './movie-resolve.service';

describe('MovieResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieResolveService = TestBed.get(MovieResolveService);
    expect(service).toBeTruthy();
  });
});
