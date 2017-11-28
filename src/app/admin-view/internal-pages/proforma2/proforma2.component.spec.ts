import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proforma2Component } from './proforma2.component';

describe('Proforma2Component', () => {
  let component: Proforma2Component;
  let fixture: ComponentFixture<Proforma2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proforma2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proforma2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
