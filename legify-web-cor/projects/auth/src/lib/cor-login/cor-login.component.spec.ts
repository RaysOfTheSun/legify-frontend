import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorLoginComponent } from './cor-login.component';

describe('CorLoginComponent', () => {
  let component: CorLoginComponent;
  let fixture: ComponentFixture<CorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
