import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavadminComponent } from './sidenavadmin.component';

describe('SidenavadminComponent', () => {
  let component: SidenavadminComponent;
  let fixture: ComponentFixture<SidenavadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
