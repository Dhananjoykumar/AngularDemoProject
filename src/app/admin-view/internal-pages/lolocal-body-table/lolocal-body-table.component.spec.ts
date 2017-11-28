import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LolocalBodyTableComponent } from './lolocal-body-table.component';

describe('LolocalBodyTableComponent', () => {
  let component: LolocalBodyTableComponent;
  let fixture: ComponentFixture<LolocalBodyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LolocalBodyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LolocalBodyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
