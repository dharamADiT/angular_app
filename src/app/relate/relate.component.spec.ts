import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateComponent } from './relate.component';

describe('RelateComponent', () => {
  let component: RelateComponent;
  let fixture: ComponentFixture<RelateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelateComponent]
    });
    fixture = TestBed.createComponent(RelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
