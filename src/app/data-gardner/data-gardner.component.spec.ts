import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGardnerComponent } from './data-gardner.component';

describe('DataGardnerComponent', () => {
  let component: DataGardnerComponent;
  let fixture: ComponentFixture<DataGardnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataGardnerComponent]
    });
    fixture = TestBed.createComponent(DataGardnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
