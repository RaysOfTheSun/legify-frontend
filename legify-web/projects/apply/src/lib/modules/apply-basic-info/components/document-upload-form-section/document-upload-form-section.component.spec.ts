import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUploadFormSectionComponent } from './document-upload-form-section.component';

describe('DocumentUploadFormSectionComponent', () => {
  let component: DocumentUploadFormSectionComponent;
  let fixture: ComponentFixture<DocumentUploadFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentUploadFormSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUploadFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
