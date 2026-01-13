import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProChild2Component } from './pro-child2.component';

describe('ProChild2Component', () => {
  let component: ProChild2Component;
  let fixture: ComponentFixture<ProChild2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProChild2Component]
    });
    fixture = TestBed.createComponent(ProChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
