import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPacientesComponent } from './ingreso-pacientes.component';

describe('IngresoPacientesComponent', () => {
  let component: IngresoPacientesComponent;
  let fixture: ComponentFixture<IngresoPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
