import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseProyectoComponent } from './release-proyecto.component';

describe('ReleaseProyectoComponent', () => {
  let component: ReleaseProyectoComponent;
  let fixture: ComponentFixture<ReleaseProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseProyectoComponent]
    });
    fixture = TestBed.createComponent(ReleaseProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
