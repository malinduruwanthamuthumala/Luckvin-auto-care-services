import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmVehicleregistrationComponent } from './confirm-vehicleregistration.component';

describe('ConfirmVehicleregistrationComponent', () => {
  let component: ConfirmVehicleregistrationComponent;
  let fixture: ComponentFixture<ConfirmVehicleregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmVehicleregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmVehicleregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
