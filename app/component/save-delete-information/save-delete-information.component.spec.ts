import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDeleteInformationComponent } from './save-delete-information.component';

describe('SaveDeleteInformationComponent', () => {
  let component: SaveDeleteInformationComponent;
  let fixture: ComponentFixture<SaveDeleteInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveDeleteInformationComponent]
    });
    fixture = TestBed.createComponent(SaveDeleteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
