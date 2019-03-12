import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateqrComponent } from './generateqr.component';

describe('GenerateqrComponent', () => {
  let component: GenerateqrComponent;
  let fixture: ComponentFixture<GenerateqrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateqrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
