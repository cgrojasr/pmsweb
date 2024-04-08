import { TestBed } from '@angular/core/testing';

import { GestorService } from './gestor.service';

describe('GestorService', () => {
  let service: GestorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
