import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyShellComponent } from './apply-shell.component';

describe('ApplyShellComponent', () => {
  let component: ApplyShellComponent;
  let fixture: ComponentFixture<ApplyShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
