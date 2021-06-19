import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCorComponent } from './apply-cor.component';

describe('ApplyCorComponent', () => {
  let component: ApplyCorComponent;
  let fixture: ComponentFixture<ApplyCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyCorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
