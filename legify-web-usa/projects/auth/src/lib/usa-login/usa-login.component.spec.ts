import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaLoginComponent } from './usa-login.component';

describe('UsaLoginComponent', () => {
  let component: UsaLoginComponent;
  let fixture: ComponentFixture<UsaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
