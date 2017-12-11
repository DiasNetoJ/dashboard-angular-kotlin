import { TestBed, inject } from '@angular/core/testing';

import { ComparativosService } from './comparativos.service';

describe('ComparativosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComparativosService]
    });
  });

  it('should be created', inject([ComparativosService], (service: ComparativosService) => {
    expect(service).toBeTruthy();
  }));
});
