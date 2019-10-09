import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWorksComponent } from './product-works.component';

describe('ProductWorksComponent', () => {
  let component: ProductWorksComponent;
  let fixture: ComponentFixture<ProductWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
