import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushnotificationComponent } from './pushnotification.component';

describe('PushnotificationComponent', () => {
  let component: PushnotificationComponent;
  let fixture: ComponentFixture<PushnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
