import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyShellSidenavItemComponent } from './apply-shell-sidenav-item.component';

describe('ApplyShellSidenavItemComponent', () => {
  let component: ApplyShellSidenavItemComponent;
  let fixture: ComponentFixture<ApplyShellSidenavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyShellSidenavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyShellSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
