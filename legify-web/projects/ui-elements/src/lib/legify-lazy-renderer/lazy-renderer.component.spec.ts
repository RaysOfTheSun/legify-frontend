import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRendererComponent } from './lazy-renderer.component';

describe('LazyRendererComponent', () => {
  let component: LazyRendererComponent;
  let fixture: ComponentFixture<LazyRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
