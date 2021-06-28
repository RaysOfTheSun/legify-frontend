import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaApplyDocumentsComponent } from './usa-apply-documents.component';

describe('UsaApplyDocumentsComponent', () => {
  let component: UsaApplyDocumentsComponent;
  let fixture: ComponentFixture<UsaApplyDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaApplyDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaApplyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
