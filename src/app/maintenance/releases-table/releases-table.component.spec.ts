import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesTableComponent } from './releases-table.component';

describe('ReleasesTableComponent', () => {
  let component: ReleasesTableComponent;
  let fixture: ComponentFixture<ReleasesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleasesTableComponent]
    });
    fixture = TestBed.createComponent(ReleasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
