import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionUsuariosComponent } from './creacion-usuarios.component';

describe('CreacionUsuariosComponent', () => {
  let component: CreacionUsuariosComponent;
  let fixture: ComponentFixture<CreacionUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
