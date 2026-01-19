import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkClientComponent } from './uk-client.component';

describe('UkClientComponent', () => {
  let component: UkClientComponent;
  let fixture: ComponentFixture<UkClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UkClientComponent]
    });
    fixture = TestBed.createComponent(UkClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
