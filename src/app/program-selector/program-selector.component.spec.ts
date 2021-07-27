import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramSelectorComponent } from './program-selector.component';

describe('ProgramSelectorComponent', () => {
  let component: ProgramSelectorComponent;
  let fixture: ComponentFixture<ProgramSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
