import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegifyTaskCardComponent } from './legify-task-card.component';

describe('LegifyTaskCardComponent', () => {
  let component: LegifyTaskCardComponent;
  let fixture: ComponentFixture<LegifyTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegifyTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegifyTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
