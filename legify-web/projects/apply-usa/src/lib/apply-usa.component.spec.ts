import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyUsaComponent } from './apply-usa.component';

describe('ApplyUsaComponent', () => {
  let component: ApplyUsaComponent;
  let fixture: ComponentFixture<ApplyUsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyUsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyUsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
