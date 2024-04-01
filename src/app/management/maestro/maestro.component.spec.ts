import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroComponent } from './maestro.component';

describe('MaestroComponent', () => {
  let component: MaestroComponent;
  let fixture: ComponentFixture<MaestroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaestroComponent]
    });
    fixture = TestBed.createComponent(MaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
