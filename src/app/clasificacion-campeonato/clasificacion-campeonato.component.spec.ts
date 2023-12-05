import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionCampeonatoComponent } from './clasificacion-campeonato.component';

describe('ClasificacionCampeonatoComponent', () => {
  let component: ClasificacionCampeonatoComponent;
  let fixture: ComponentFixture<ClasificacionCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasificacionCampeonatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasificacionCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
