import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysComponent } from './weekdays.component';

describe('WeekdaysComponent', () => {
  let component: WeekdaysComponent;
  let fixture: ComponentFixture<WeekdaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekdaysComponent]
    });
    fixture = TestBed.createComponent(WeekdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
