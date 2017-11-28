import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCollectionTableComponent } from './fund-collection-table.component';

describe('FundCollectionTableComponent', () => {
  let component: FundCollectionTableComponent;
  let fixture: ComponentFixture<FundCollectionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCollectionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCollectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
