import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCitasComponent } from './creacion-citas.component';

describe('CreacionCitasComponent', () => {
  let component: CreacionCitasComponent;
  let fixture: ComponentFixture<CreacionCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
