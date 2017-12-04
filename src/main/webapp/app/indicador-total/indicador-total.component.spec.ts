import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorTotalComponent } from './indicador-total.component';

describe('IndicadorTotalComponent', () => {
  let component: IndicadorTotalComponent;
  let fixture: ComponentFixture<IndicadorTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicadorTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
