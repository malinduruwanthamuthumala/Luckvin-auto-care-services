import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingReservationsComponent } from './ongoing-reservations.component';

describe('OngoingReservationsComponent', () => {
  let component: OngoingReservationsComponent;
  let fixture: ComponentFixture<OngoingReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
