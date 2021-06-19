import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyShellHeaderComponent } from './apply-shell-header.component';

describe('ApplyShellHeaderComponent', () => {
  let component: ApplyShellHeaderComponent;
  let fixture: ComponentFixture<ApplyShellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyShellHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
