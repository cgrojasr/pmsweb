import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosItemComponent } from './proyectos-item.component';

describe('ProyectosItemComponent', () => {
  let component: ProyectosItemComponent;
  let fixture: ComponentFixture<ProyectosItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosItemComponent]
    });
    fixture = TestBed.createComponent(ProyectosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
