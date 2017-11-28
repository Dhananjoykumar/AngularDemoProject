import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpenseTableComponent } from './daily-expense-table.component';

describe('DailyExpenseTableComponent', () => {
  let component: DailyExpenseTableComponent;
  let fixture: ComponentFixture<DailyExpenseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyExpenseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExpenseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
