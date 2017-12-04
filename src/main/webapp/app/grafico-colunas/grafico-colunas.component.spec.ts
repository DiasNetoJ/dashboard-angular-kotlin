import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoColunasComponent } from './grafico-colunas.component';

describe('GraficoColunasComponent', () => {
  let component: GraficoColunasComponent;
  let fixture: ComponentFixture<GraficoColunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoColunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoColunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
