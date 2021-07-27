import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunMeritListComponent } from './run-merit-list.component';

describe('RunMeritListComponent', () => {
  let component: RunMeritListComponent;
  let fixture: ComponentFixture<RunMeritListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunMeritListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunMeritListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
