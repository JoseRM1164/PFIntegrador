import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInventarioComponent } from './single-inventario.component';

describe('SingleInventarioComponent', () => {
  let component: SingleInventarioComponent;
  let fixture: ComponentFixture<SingleInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
