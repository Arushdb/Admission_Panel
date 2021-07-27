import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdMarksComponent } from './gd-marks.component';

describe('GdMarksComponent', () => {
  let component: GdMarksComponent;
  let fixture: ComponentFixture<GdMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
