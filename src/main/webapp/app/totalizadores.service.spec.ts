import { TestBed, inject } from '@angular/core/testing';

import { TotalizadoresService } from './totalizadores.service';

describe('TotalizadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalizadoresService]
    });
  });

  it('should be created', inject([TotalizadoresService], (service: TotalizadoresService) => {
    expect(service).toBeTruthy();
  }));
});
