import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementupdateComponent } from './payementupdate.component';

describe('PayementupdateComponent', () => {
  let component: PayementupdateComponent;
  let fixture: ComponentFixture<PayementupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
