import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEtapaTableComponent } from './proyecto-etapa-table.component';

describe('ProyectoEtapaTableComponent', () => {
  let component: ProyectoEtapaTableComponent;
  let fixture: ComponentFixture<ProyectoEtapaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectoEtapaTableComponent]
    });
    fixture = TestBed.createComponent(ProyectoEtapaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
