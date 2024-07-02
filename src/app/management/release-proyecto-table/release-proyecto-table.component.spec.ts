import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseProyectoTableComponent } from './release-proyecto-table.component';

describe('ReleaseProyectoTableComponent', () => {
  let component: ReleaseProyectoTableComponent;
  let fixture: ComponentFixture<ReleaseProyectoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseProyectoTableComponent]
    });
    fixture = TestBed.createComponent(ReleaseProyectoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
