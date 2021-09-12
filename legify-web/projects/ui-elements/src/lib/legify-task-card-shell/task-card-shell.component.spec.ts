import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardShellComponent } from './task-card-shell.component';

describe('TaskCardShellComponent', () => {
  let component: TaskCardShellComponent;
  let fixture: ComponentFixture<TaskCardShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCardShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCardShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
