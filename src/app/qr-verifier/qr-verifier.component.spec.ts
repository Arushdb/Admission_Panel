import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrVerifierComponent } from './qr-verifier.component';

describe('QrVerifierComponent', () => {
  let component: QrVerifierComponent;
  let fixture: ComponentFixture<QrVerifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrVerifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrVerifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
