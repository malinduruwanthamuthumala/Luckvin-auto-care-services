import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmvehicleregComponent } from './confirmvehiclereg.component';

describe('ConfirmvehicleregComponent', () => {
  let component: ConfirmvehicleregComponent;
  let fixture: ComponentFixture<ConfirmvehicleregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmvehicleregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmvehicleregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
