import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListWorksComponent } from './product-list-works.component';

describe('ProductListWorksComponent', () => {
  let component: ProductListWorksComponent;
  let fixture: ComponentFixture<ProductListWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
