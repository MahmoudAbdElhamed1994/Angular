import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDiscountProdComponent } from './no-discount-prod.component';

describe('NoDiscountProdComponent', () => {
  let component: NoDiscountProdComponent;
  let fixture: ComponentFixture<NoDiscountProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDiscountProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDiscountProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
