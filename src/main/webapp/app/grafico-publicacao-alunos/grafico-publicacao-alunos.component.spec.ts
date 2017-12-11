import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPublicacaoAlunosComponent } from './grafico-publicacao-alunos.component';

describe('GraficoPublicacaoAlunosComponent', () => {
  let component: GraficoPublicacaoAlunosComponent;
  let fixture: ComponentFixture<GraficoPublicacaoAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPublicacaoAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPublicacaoAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
