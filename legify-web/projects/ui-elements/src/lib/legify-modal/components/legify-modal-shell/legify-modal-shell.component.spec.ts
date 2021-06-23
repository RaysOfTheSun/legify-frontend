import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegifyModalShellComponent } from './legify-modal-shell.component';

describe('LegifyModalShellComponent', () => {
  let component: LegifyModalShellComponent;
  let fixture: ComponentFixture<LegifyModalShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegifyModalShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegifyModalShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
