import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunComputationComponent } from './run-computation.component';

describe('RunComputationComponent', () => {
  let component: RunComputationComponent;
  let fixture: ComponentFixture<RunComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunComputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
