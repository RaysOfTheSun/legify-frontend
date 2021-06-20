import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthShellFooterComponent } from './auth-shell-footer.component';

describe('AuthShellFooterComponent', () => {
  let component: AuthShellFooterComponent;
  let fixture: ComponentFixture<AuthShellFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthShellFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthShellFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
