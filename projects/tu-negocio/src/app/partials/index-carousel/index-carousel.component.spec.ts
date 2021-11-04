import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCarouselComponent } from './index-carousel.component';

describe('IndexCarouselComponent', () => {
  let component: IndexCarouselComponent;
  let fixture: ComponentFixture<IndexCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
