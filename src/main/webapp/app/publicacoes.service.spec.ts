import { TestBed, inject } from '@angular/core/testing';

import { PublicacoesService } from './publicacoes.service';

describe('PublicacoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacoesService]
    });
  });

  it('should be created', inject([PublicacoesService], (service: PublicacoesService) => {
    expect(service).toBeTruthy();
  }));
});
