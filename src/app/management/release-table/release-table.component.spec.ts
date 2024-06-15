import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTableComponent } from './release-table.component';

describe('ReleaseTableComponent', () => {
  let component: ReleaseTableComponent;
  let fixture: ComponentFixture<ReleaseTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseTableComponent]
    });
    fixture = TestBed.createComponent(ReleaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
