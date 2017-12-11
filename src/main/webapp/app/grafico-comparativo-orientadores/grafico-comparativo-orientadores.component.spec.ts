import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoComparativoOrientadoresComponent } from './grafico-comparativo-orientadores.component';

describe('GraficoComparativoOrientadoresComponent', () => {
  let component: GraficoComparativoOrientadoresComponent;
  let fixture: ComponentFixture<GraficoComparativoOrientadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoComparativoOrientadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoComparativoOrientadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
