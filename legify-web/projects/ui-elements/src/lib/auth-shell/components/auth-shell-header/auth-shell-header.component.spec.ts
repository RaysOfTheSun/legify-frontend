import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthShellHeaderComponent } from './auth-shell-header.component';

describe('AuthShellHeaderComponent', () => {
  let component: AuthShellHeaderComponent;
  let fixture: ComponentFixture<AuthShellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthShellHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthShellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
