import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityProgramSelectorComponent } from './entity-program-selector.component';

describe('EntityProgramSelectorComponent', () => {
  let component: EntityProgramSelectorComponent;
  let fixture: ComponentFixture<EntityProgramSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityProgramSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityProgramSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
