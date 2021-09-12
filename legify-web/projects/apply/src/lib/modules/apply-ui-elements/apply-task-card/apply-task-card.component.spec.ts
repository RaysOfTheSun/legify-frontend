import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyTaskCardComponent } from './apply-task-card.component';

describe('ApplyTaskCardComponent', () => {
  let component: ApplyTaskCardComponent;
  let fixture: ComponentFixture<ApplyTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyTaskCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
