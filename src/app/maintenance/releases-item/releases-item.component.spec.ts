import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesItemComponent } from './releases-item.component';

describe('ReleasesItemComponent', () => {
  let component: ReleasesItemComponent;
  let fixture: ComponentFixture<ReleasesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleasesItemComponent]
    });
    fixture = TestBed.createComponent(ReleasesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
