import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistETMarksComponent } from './dist-etmarks.component';

describe('DistETMarksComponent', () => {
  let component: DistETMarksComponent;
  let fixture: ComponentFixture<DistETMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistETMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistETMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
