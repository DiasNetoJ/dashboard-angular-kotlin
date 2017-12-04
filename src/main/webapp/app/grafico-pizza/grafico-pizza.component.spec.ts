import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPizzaComponent } from './grafico-pizza.component';

describe('GraficoPizzaComponent', () => {
  let component: GraficoPizzaComponent;
  let fixture: ComponentFixture<GraficoPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
