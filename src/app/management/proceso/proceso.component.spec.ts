import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoComponent } from './proceso.component';

describe('ProcesoComponent', () => {
  let component: ProcesoComponent;
  let fixture: ComponentFixture<ProcesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesoComponent]
    });
    fixture = TestBed.createComponent(ProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
