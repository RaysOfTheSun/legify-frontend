import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadUploaderGroupComponent } from './document-upload-uploader-group.component';

describe('DocumentUploadUploaderGroupComponent', () => {
  let component: DocumentUploadUploaderGroupComponent;
  let fixture: ComponentFixture<DocumentUploadUploaderGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUploadUploaderGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadUploaderGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
