import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaApplyComponent } from './usa-apply.component';

describe('UsaApplyComponent', () => {
  let component: UsaApplyComponent;
  let fixture: ComponentFixture<UsaApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
