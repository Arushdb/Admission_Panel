import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyComputationComponent } from './verify-computation.component';

describe('VerifyComputationComponent', () => {
  let component: VerifyComputationComponent;
  let fixture: ComponentFixture<VerifyComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyComputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
