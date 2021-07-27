import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcaPanelComponent } from './cca-panel.component';

describe('CcaPanelComponent', () => {
  let component: CcaPanelComponent;
  let fixture: ComponentFixture<CcaPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcaPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
