import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTripulacionComponent } from './perfil-tripulacion.component';

describe('PerfilTripulacionComponent', () => {
  let component: PerfilTripulacionComponent;
  let fixture: ComponentFixture<PerfilTripulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilTripulacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilTripulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
