import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBoxComponent } from './dynamic-box.component';

describe('DynamicBoxComponent', () => {
  let component: DynamicBoxComponent;
  let fixture: ComponentFixture<DynamicBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
