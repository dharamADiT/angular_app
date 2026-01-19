import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianClientComponent } from './indian-client.component';

describe('IndianClientComponent', () => {
  let component: IndianClientComponent;
  let fixture: ComponentFixture<IndianClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndianClientComponent]
    });
    fixture = TestBed.createComponent(IndianClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
