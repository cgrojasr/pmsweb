import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseItemComponent } from './release-item.component';

describe('ReleaseItemComponent', () => {
  let component: ReleaseItemComponent;
  let fixture: ComponentFixture<ReleaseItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseItemComponent]
    });
    fixture = TestBed.createComponent(ReleaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
