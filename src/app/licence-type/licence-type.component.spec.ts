import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceTypeComponent } from './licence-type.component';

describe('LicenceTypeComponent', () => {
  let component: LicenceTypeComponent;
  let fixture: ComponentFixture<LicenceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
