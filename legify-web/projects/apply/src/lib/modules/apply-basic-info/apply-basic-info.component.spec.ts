import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyBasicInfoComponent } from './apply-basic-info.component';

describe('ApplyBasicInfoComponent', () => {
  let component: ApplyBasicInfoComponent;
  let fixture: ComponentFixture<ApplyBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
