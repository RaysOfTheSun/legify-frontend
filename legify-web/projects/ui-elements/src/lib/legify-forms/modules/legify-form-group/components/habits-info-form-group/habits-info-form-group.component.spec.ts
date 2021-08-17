import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitsInfoFormGroupComponent } from './habits-info-form-group.component';

describe('HabitsInfoFormGroupComponent', () => {
  let component: HabitsInfoFormGroupComponent;
  let fixture: ComponentFixture<HabitsInfoFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabitsInfoFormGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitsInfoFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
