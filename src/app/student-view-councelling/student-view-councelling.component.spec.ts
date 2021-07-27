import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewCouncellingComponent } from './student-view-councelling.component';

describe('StudentViewCouncellingComponent', () => {
  let component: StudentViewCouncellingComponent;
  let fixture: ComponentFixture<StudentViewCouncellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentViewCouncellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewCouncellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
