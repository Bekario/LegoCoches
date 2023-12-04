import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarCircuitoComponent } from './reservar-circuito.component';

describe('ReservarCircuitoComponent', () => {
  let component: ReservarCircuitoComponent;
  let fixture: ComponentFixture<ReservarCircuitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarCircuitoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservarCircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
