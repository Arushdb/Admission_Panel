import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAppComponent } from './transfer-app.component';

describe('TransferAppComponent', () => {
  let component: TransferAppComponent;
  let fixture: ComponentFixture<TransferAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
