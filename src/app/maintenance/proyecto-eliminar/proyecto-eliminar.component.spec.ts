import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEliminarComponent } from './proyecto-eliminar.component';

describe('ProyectoEliminarComponent', () => {
  let component: ProyectoEliminarComponent;
  let fixture: ComponentFixture<ProyectoEliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectoEliminarComponent]
    });
    fixture = TestBed.createComponent(ProyectoEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
