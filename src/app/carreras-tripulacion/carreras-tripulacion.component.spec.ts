import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasTripulacionComponent } from './carreras-tripulacion.component';

describe('CarrerasTripulacionComponent', () => {
  let component: CarrerasTripulacionComponent;
  let fixture: ComponentFixture<CarrerasTripulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrerasTripulacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrerasTripulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
