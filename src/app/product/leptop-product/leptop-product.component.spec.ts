import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeptopProductComponent } from './leptop-product.component';

describe('LeptopProductComponent', () => {
  let component: LeptopProductComponent;
  let fixture: ComponentFixture<LeptopProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeptopProductComponent]
    });
    fixture = TestBed.createComponent(LeptopProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
