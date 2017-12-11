import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPublicacaoOrientadoresComponent } from './grafico-publicacao-orientadores.component';

describe('GraficoPublicacaoOrientadoresComponent', () => {
  let component: GraficoPublicacaoOrientadoresComponent;
  let fixture: ComponentFixture<GraficoPublicacaoOrientadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPublicacaoOrientadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPublicacaoOrientadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
