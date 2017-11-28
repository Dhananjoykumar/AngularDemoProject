import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proforma3Component } from './proforma3.component';

describe('Proforma3Component', () => {
  let component: Proforma3Component;
  let fixture: ComponentFixture<Proforma3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proforma3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proforma3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
