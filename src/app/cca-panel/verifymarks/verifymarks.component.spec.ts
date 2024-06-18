import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifymarksComponent } from './verifymarks.component';

describe('VerifymarksComponent', () => {
  let component: VerifymarksComponent;
  let fixture: ComponentFixture<VerifymarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifymarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifymarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
