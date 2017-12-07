import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalizadoresComponent } from './totalizadores.component';

describe('TotalizadoresComponent', () => {
  let component: TotalizadoresComponent;
  let fixture: ComponentFixture<TotalizadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalizadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalizadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
