import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMeritListComponent } from './verify-merit-list.component';

describe('VerifyMeritListComponent', () => {
  let component: VerifyMeritListComponent;
  let fixture: ComponentFixture<VerifyMeritListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyMeritListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyMeritListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
