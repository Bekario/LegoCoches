import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTripulacionComponent } from './main-tripulacion.component';

describe('MainTripulacionComponent', () => {
  let component: MainTripulacionComponent;
  let fixture: ComponentFixture<MainTripulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTripulacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainTripulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
