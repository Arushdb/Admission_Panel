import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksGridComponent } from './marks-grid.component';

describe('MarksGridComponent', () => {
  let component: MarksGridComponent;
  let fixture: ComponentFixture<MarksGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
