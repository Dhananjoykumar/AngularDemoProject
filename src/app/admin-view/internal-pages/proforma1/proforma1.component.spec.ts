import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proforma1Component } from './proforma1.component';

describe('Proforma1Component', () => {
  let component: Proforma1Component;
  let fixture: ComponentFixture<Proforma1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proforma1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proforma1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
