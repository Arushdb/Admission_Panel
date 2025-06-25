import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyProgramListComponent } from './verify-program-list.component';

describe('VerifyProgramListComponent', () => {
  let component: VerifyProgramListComponent;
  let fixture: ComponentFixture<VerifyProgramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyProgramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
