import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Proforma4Component } from './proforma4.component';

describe('Proforma4Component', () => {
  let component: Proforma4Component;
  let fixture: ComponentFixture<Proforma4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Proforma4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Proforma4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
