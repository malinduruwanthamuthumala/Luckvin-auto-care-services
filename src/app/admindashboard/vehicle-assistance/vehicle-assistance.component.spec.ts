import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleAssistanceComponent } from './vehicle-assistance.component';

describe('VehicleAssistanceComponent', () => {
  let component: VehicleAssistanceComponent;
  let fixture: ComponentFixture<VehicleAssistanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleAssistanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
