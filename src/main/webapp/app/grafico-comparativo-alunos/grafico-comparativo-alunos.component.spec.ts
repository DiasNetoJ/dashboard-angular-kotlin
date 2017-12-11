import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComparativoAlunosComponent } from './grafico-comparativo-alunos.component';

describe('GraficoComparativoAlunosComponent', () => {
  let component: GraficoComparativoAlunosComponent;
  let fixture: ComponentFixture<GraficoComparativoAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoComparativoAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoComparativoAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
