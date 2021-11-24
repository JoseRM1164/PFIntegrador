import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReporteComponent } from './new-reporte.component';

describe('NewReporteComponent', () => {
  let component: NewReporteComponent;
  let fixture: ComponentFixture<NewReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
