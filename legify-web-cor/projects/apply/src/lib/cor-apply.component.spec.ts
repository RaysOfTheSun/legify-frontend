import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorApplyComponent } from './cor-apply.component';

describe('CorApplyComponent', () => {
  let component: CorApplyComponent;
  let fixture: ComponentFixture<CorApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
