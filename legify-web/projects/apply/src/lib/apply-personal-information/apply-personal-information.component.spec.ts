import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPersonalInformationComponent } from './apply-personal-information.component';

describe('ApplyPersonalInformationComponent', () => {
  let component: ApplyPersonalInformationComponent;
  let fixture: ComponentFixture<ApplyPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
