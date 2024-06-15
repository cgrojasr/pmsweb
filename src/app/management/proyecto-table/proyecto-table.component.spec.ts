import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoTableComponent } from './proyecto-table.component';

describe('ProyectoTableComponent', () => {
  let component: ProyectoTableComponent;
  let fixture: ComponentFixture<ProyectoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectoTableComponent]
    });
    fixture = TestBed.createComponent(ProyectoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
