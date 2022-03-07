import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountProdComponent } from './discount-prod.component';

describe('DiscountProdComponent', () => {
  let component: DiscountProdComponent;
  let fixture: ComponentFixture<DiscountProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
