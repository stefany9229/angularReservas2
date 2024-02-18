import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasProfessionalComponent } from './citas-professional.component';

describe('CitasProfessionalComponent', () => {
  let component: CitasProfessionalComponent;
  let fixture: ComponentFixture<CitasProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
