import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegifyUsaTaskCardComponent } from './legify-usa-task-card.component';

describe('LegifyUsaTaskCardComponent', () => {
  let component: LegifyUsaTaskCardComponent;
  let fixture: ComponentFixture<LegifyUsaTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegifyUsaTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegifyUsaTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
