import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDailyExpenseComponent } from './candidate-daily-expense.component';

describe('CandidateDailyExpenseComponent', () => {
  let component: CandidateDailyExpenseComponent;
  let fixture: ComponentFixture<CandidateDailyExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDailyExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDailyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
