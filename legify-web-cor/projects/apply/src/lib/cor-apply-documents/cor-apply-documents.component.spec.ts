import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorApplyDocumentsComponent } from './cor-apply-documents.component';

describe('CorApplyDocumentsComponent', () => {
  let component: CorApplyDocumentsComponent;
  let fixture: ComponentFixture<CorApplyDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorApplyDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorApplyDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
