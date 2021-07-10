import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyShellHeaderBreadcrumbItemComponent } from './apply-shell-header-breadcrumb-item.component';

describe('ApplyShellHeaderBreadcrumbItemComponent', () => {
  let component: ApplyShellHeaderBreadcrumbItemComponent;
  let fixture: ComponentFixture<ApplyShellHeaderBreadcrumbItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyShellHeaderBreadcrumbItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyShellHeaderBreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
