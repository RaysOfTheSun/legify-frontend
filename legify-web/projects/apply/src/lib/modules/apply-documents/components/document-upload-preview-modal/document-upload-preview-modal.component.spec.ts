import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadPreviewModalComponent } from './document-upload-preview-modal.component';

describe('DocumentUploadPreviewModalComponent', () => {
  let component: DocumentUploadPreviewModalComponent;
  let fixture: ComponentFixture<DocumentUploadPreviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUploadPreviewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadPreviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
