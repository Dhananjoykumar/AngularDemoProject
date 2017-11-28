import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCollectionDetailsComponent } from './fund-collection-details.component';

describe('FundCollectionDetailsComponent', () => {
  let component: FundCollectionDetailsComponent;
  let fixture: ComponentFixture<FundCollectionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCollectionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCollectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
