import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDocumentUploadItemComponent } from './apply-document-upload-item.component';

describe('ApplyDocumentUploadItemComponent', () => {
  let component: ApplyDocumentUploadItemComponent;
  let fixture: ComponentFixture<ApplyDocumentUploadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyDocumentUploadItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDocumentUploadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
