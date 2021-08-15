import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsnuredBasicInfoFormComponent } from './isnured-basic-info-form.component';

describe('IsnuredBasicInfoFormComponent', () => {
  let component: IsnuredBasicInfoFormComponent;
  let fixture: ComponentFixture<IsnuredBasicInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsnuredBasicInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsnuredBasicInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
