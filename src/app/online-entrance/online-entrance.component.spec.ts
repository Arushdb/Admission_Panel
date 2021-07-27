import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEntranceComponent } from './online-entrance.component';

describe('OnlineEntranceComponent', () => {
  let component: OnlineEntranceComponent;
  let fixture: ComponentFixture<OnlineEntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineEntranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
