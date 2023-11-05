import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesInformationComponent } from './resources-information.component';

describe('ResourcesInformationComponent', () => {
  let component: ResourcesInformationComponent;
  let fixture: ComponentFixture<ResourcesInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesInformationComponent]
    });
    fixture = TestBed.createComponent(ResourcesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
