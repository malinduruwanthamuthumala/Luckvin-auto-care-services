import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricantsComponent } from './lubricants.component';

describe('LubricantsComponent', () => {
  let component: LubricantsComponent;
  let fixture: ComponentFixture<LubricantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubricantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LubricantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
