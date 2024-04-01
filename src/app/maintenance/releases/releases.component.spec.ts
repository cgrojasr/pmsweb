import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesComponent } from './releases.component';

describe('ReleasesComponent', () => {
  let component: ReleasesComponent;
  let fixture: ComponentFixture<ReleasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleasesComponent]
    });
    fixture = TestBed.createComponent(ReleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
