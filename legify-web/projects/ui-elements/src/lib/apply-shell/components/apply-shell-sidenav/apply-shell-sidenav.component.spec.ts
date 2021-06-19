import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyShellSidenavComponent } from './apply-shell-sidenav.component';

describe('ApplyShellSidenavComponent', () => {
  let component: ApplyShellSidenavComponent;
  let fixture: ComponentFixture<ApplyShellSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyShellSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyShellSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
