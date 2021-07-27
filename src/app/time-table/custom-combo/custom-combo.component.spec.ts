import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComboComponent } from './custom-combo.component';

describe('CustomComboComponent', () => {
  let component: CustomComboComponent;
  let fixture: ComponentFixture<CustomComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
